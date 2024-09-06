function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim()

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p><b>O campo de busca não pode ser vazio ou conter apenas um caractere de espaço.</b></p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada item de dados (assumindo que 'dados' é um array)
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
      resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>
  `;
    }
  }

  if (!resultados) {
    resultados = "<p><b>Nenhum atleta foi encontrado!</b></p>"
  }
  // Atribui o HTML gerado para o conteúdo da seção, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}

const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    pesquisar();
  }
});

// // function pesquisarPais(nomePais) {
// //   const paisEncontrado = dadosPaises.find(pais => pais.pais === nomePais);
// //   return paisEncontrado;
// // }