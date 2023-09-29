async function listaCarros(){
    const conexao = await fetch("http://localhost:3000/carros");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
    
}

export const conectaApi = {
    listaCarros,
}
