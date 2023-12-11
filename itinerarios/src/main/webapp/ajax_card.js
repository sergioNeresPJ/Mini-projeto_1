function initAjax() {
  return new XMLHttpRequest();
}

function postItinerario() {
  let data = {
    nome: $("#nome").val(),
    regiao: $("#regiao").val(),
    paradas: $(".input-parada").map(function() {
      return $(this).val();
    }).get()
  };

  console.log("DATA: " + JSON.stringify(data));

  $.ajax({
    type: "POST",
    url: "/itinerarios/postitinerario",
    data: data,
    success: function(response) {
      // O código aqui será executado em caso de sucesso
      console.log("Request successful!");
    },
    error: function(xhr, status, error) {
      // O código aqui será executado em caso de erro
      console.log("Error: " + xhr.status + " - " + error);
    }
  });
}


function getItinerarios() {
  const searchTerm = document.getElementById("searchInput").value;

  const xhttp = initAjax();

  xhttp.onload = function () {
    console.log("Resposta do servlet recebida com sucesso.");
    exibirResultado(this.responseText);
  };

  xhttp.onerror = function () {
    console.error("Erro ao se comunicar com o servlet.");
  };

  // Configurar a solicitação para o servlet
  xhttp.open("POST", "getitinerario?regiao=" + encodeURIComponent(searchTerm), true);
  xhttp.send();
}

function exibirResultado(responseText) {
  try {
    // Tentar fazer o parsing da resposta JSON
    const resultados = JSON.parse(responseText);
    // Ordenar os resultados pelo campo "uso"
    resultados.sort((a, b) => {
      return parseInt(b.uso) - parseInt(a.uso);
    });
    console.log(resultados)

    // Selecionar o elemento onde os resultados serão exibidos
    const conteudoDinamico = document.getElementById("conteudo-dinamico");
    console.log(conteudoDinamico)

    // Limpar o conteúdo atual
    conteudoDinamico.innerHTML = "";

    // Iterar sobre os resultados e criar cards para exibição
    resultados.forEach(function (resultado) {
      const cardHTML = `
      <div class="itinerario-card">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${resultado.nome}</h5>
          <p class="card-text">Região: ${resultado.regiao} <br> Paradas: ${resultado.paradas}</p>
        </div>
      </div>
    </div>
        `;

      // Adicionar o card ao conteúdo dinâmico
      console.log("aqui")
      conteudoDinamico.innerHTML += cardHTML;
    });
  } catch (error) {
    // Tratar caso a resposta não seja válida JSON
    console.error("Erro ao analisar JSON:", error);
  }
}