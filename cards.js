









// Função para criar um novo card da montadora
 function criarMontadoraCard(nome, fotoURL) {
    const card = document.createElement("div");
    card.classList.add("montadora-card");
  
    const logo = document.createElement("img");
    logo.src = fotoURL;
    logo.alt = `Logo da ${nome}`;
  
    const nomeMontadora = document.createElement("p");
    nomeMontadora.classList.add("nome-montadora");
    nomeMontadora.textContent = nome;
  
    card.appendChild(logo);
    card.appendChild(nomeMontadora);
  
    return card;
  }
  
  // Capturar o formulário e o container
  const montadoraForm = document.getElementById("montadora-form");
  const montadorasContainer = document.getElementById("montadoras-container");
  
  // Manipulador de evento para o envio do formulário
  montadoraForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Capturar os valores do formulário
    const nomeMontadora = document.getElementById("nome-montadora").value;
    const fotoMontadora = document.getElementById("foto-montadora").files[0];
  
    // Validar se ambos os campos estão preenchidos
    if (nomeMontadora.trim() === "" || !fotoMontadora) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Criar uma URL temporária para a foto
    const fotoURL = URL.createObjectURL(fotoMontadora);
  
    // Criar um novo card da montadora
    const montadoraCard = criarMontadoraCard(nomeMontadora, fotoURL);
  
    // Adicionar o novo card ao container
    montadorasContainer.appendChild(montadoraCard);
  
    // Limpar o formulário
    montadoraForm.reset();
  });

 // Capturar o botão "Adicionar Montadora"
const btnAdicionarMontadora = document.getElementById("btn-adicionar-montadora");

// Adicionar um ouvinte de evento ao botão
btnAdicionarMontadora.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do botão

  // Capturar os valores do formulário
  const nomeMontadora = document.getElementById("nome-montadora").value;
  const fotoMontadora = document.getElementById("foto-montadora").files[0];

  // Validar se ambos os campos estão preenchidos
  if (nomeMontadora.trim() === "" || !fotoMontadora) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Criar uma URL temporária para a foto
  const fotoURL = URL.createObjectURL(fotoMontadora);

  // Criar um novo card da montadora
  const montadoraCard = criarMontadoraCard(nomeMontadora, fotoURL);

  // Adicionar o novo card ao container
  montadorasContainer.appendChild(montadoraCard);

  // Limpar o formulário
  montadoraForm.reset();
});
