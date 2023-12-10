function initAjax() {
  return new XMLHttpRequest();
}

function getItinerarios() {
  const xhttp = initAjax();

  xhttp.onload = function () {
    console.log("XML carregado com sucesso.");
    xmlCard(this);
  };

  xhttp.onerror = function () {
    console.error("Erro ao carregar o XML.");
  };

  xhttp.open("GET", "itinerarios.xml");
  xhttp.send();
}

function xmlCard(xml) {
  const xmlDoc = xml.responseXML;
  const data = xmlDoc.getElementsByTagName("ITINERARIO");

  // Ordenar itinerários com base no número de usos (maior para menor)
  const dataOrdenada = Array.from(data).sort((a, b) => {
    const usosA = parseInt(a.getElementsByTagName("USO")[0].textContent);
    const usosB = parseInt(b.getElementsByTagName("USO")[0].textContent);
    return usosB - usosA;
  });

  const elementoHTML = document.querySelector("#conteudo-dinamico");
  console.log(elementoHTML);

  // Criar uma string HTML para armazenar os cards
  let htmlString = "";

  for (let i = 0; i < dataOrdenada.length; i++) {
    const nome = dataOrdenada[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue;
    const regiao = dataOrdenada[i].getElementsByTagName("REGIAO")[0].childNodes[0].nodeValue;

    // Obter todas as paradas do itinerário
    const paradasNodes = dataOrdenada[i].getElementsByTagName("PARADA");

    let paradas = "";

    // Iterar sobre todas as paradas do itinerário
    for (let j = 0; j < paradasNodes.length; j++) {
      const parada = paradasNodes[j].childNodes[0].nodeValue;
      paradas += `${parada}<br>`;
    }

    const card = `
    <div class="card col itinerario-card">
      <div class="card-body">
        <h5 class="card-title">${nome}</h5>
        <p class="card-text">Região: ${regiao} <br> Paradas: ${paradas}</p>
      </div>
    </div>
  `;

    // Adicionar o HTML do card à string
    htmlString += card;
  }

  // Atribuir a string HTML ao conteúdo do elemento
  elementoHTML.innerHTML = htmlString;

  console.log("Cards adicionados com sucesso!");

  // Adicione a chamada da função de filtragem após carregar os itinerários
  filtrarItinerarios();
}

function filtrarItinerarios() {
  const input = document.getElementById("searchInput");
  const termoPesquisa = input.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const nomeItinerario = card.querySelector(".card-text").innerText.toLowerCase();

    if (nomeItinerario.includes(termoPesquisa)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
