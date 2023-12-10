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

  const elementoHTML = document.querySelector("#conteudo-dinamico");
  console.log(elementoHTML)

  // Criar uma string HTML para armazenar os cards
  let htmlString = "";

  for (let i = 0; i < Math.min(data.length, 8); i++) {
    const nome = data[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue;
    const regiao = data[i].getElementsByTagName("REGIAO")[0].childNodes[0].nodeValue;

    // Obter todas as paradas do itinerário
    const paradasNodes = data[i].getElementsByTagName("PARADA");

    let paradas = "";

    // Iterar sobre todas as paradas do itinerário
    for (let j = 0; j < paradasNodes.length; j++) {
      const parada = paradasNodes[j].childNodes[0].nodeValue;
      paradas += `${parada}<br>`;
    }

    const card = `
    <div class="card col">
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
}



function postItinerario() {
  ajax = initAjax();
  let data;

  console.log("entrei na funcao")

  data = "nome=" + document.getElementById("nome").value + "&";
  data += "regiao=" + document.getElementById("regiao").value + "&";
  const pado = document.querySelectorAll(".input-parada");

  pado.forEach((element, i) => {
    data += `parada${i}=` + element.value
    if (i !== pado.length - 1) data += "&";
  });

  console.log("DATA: " + data)

  if (ajax) {
    console.log("entrei no if")
    console.log(ajax);

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200)
        console.log("Foi!")
      else console.log("Não foi! :C", ajax.readyState, ajax.status)
    }

    url = "/itinerarios/itinerarioservletajax?" + data;
    ajax.open("GET", url, true);
    ajax.send(null);
  }
}