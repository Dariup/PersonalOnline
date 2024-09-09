function pesquisar() {
    // Coleta o valor do campo de pesquisa e transforma em minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    let section = document.getElementById("resultados-pesquisa");

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem e retorna
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    let resultados = ""; // Inicia a variável para armazenar resultados

    // Itera sobre os dados e verifica se algum campo corresponde ao valor da pesquisa
    for (let dado of dados) {
        let Titulo = dado.Titulo.toLowerCase();
        let Descrição = dado.Descrição.toLowerCase();
        let Link = dado.Link; // Link não precisa ser alterado para minúsculas

        // Verifica se o valor da pesquisa está presente em qualquer campo
        if (Titulo.includes(campoPesquisa) || Descrição.includes(campoPesquisa) || Link.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="${dado.Link}" target="_blank">${dado.Titulo}</a></h2>
                <p class="descricao-meta">${dado.Descrição}</p>
                <a href="${dado.Link}" target="_blank">Vídeo com a execução correta</a>
            </div>
            `;
        }
    }

    // Exibe os resultados ou uma mensagem se não houver resultados
    if (resultados === "") {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
    } else {
        section.innerHTML = resultados;
    }
}