import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nomeCarro, cores) {
    const carro = document.createElement("div");
    carro.className = "col-sm-3 mb-3 mb-sm-0";
    carro.innerHTML = `<div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item active text-center">${nomeCarro}</li>
        </ul>
    </div>`;
    
    const coresList = document.createElement("ul");
    coresList.className = "list-group list-group-flush"
    coresList.innerHTML = cores.map(cor => `<li class="list-group-item text-center">${cor}</li>`).join("");

    carro.appendChild(coresList);

    return carro;
}

async function listaCarros() {
    const listaApi = await conectaApi.listaCarros();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nomeCarro, elemento.cores)))
}

listaCarros();