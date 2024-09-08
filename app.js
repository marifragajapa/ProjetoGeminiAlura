function pesquisar () {
    // obtêm a seção HTML onde os resultados serão exibidos
    let section = document.getElementById ("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-Pesquisa").value

    // Se o campo de pesquisa for uma string sem nada

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome da língua ex: Libras, Braille...</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // inicializa uma string vazia para armazenar os resultados

    let resultados ="";
    let titulo ="";
    let descricao ="";
    let tags ="";

    //inicializa uma string vazia para armazenar os resultados
    //let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo incluses campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria novo elemento
        
            // cria novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;  
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui os resultados gerados à secção HTML
    section.innerHTML = resultados;
}

