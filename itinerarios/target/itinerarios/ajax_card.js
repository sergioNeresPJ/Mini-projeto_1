function initAjax() {
  return new XMLHttpRequest();
}

function getItinerarios() {
  const xhttp = initAjax();

  xhttp.onload = function() {
    console.log("estou aqui")
    xmlCard(this)
  }

  xhttp.open("GET", "itinerarios.xml");
  xhttp.send();
}

function xmlCard(xml) {
  const xmlDoc = xml.responseXML;
  console.log(xml)
  console.log(xmlDoc)
  const data = xmlDoc.getElementsByTagName("ITINERARIO");
  console.log(data);
  // aqui vao os cards
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

    url = "/itinerarios/itinerarioservletajax?"+data;
    ajax.open("GET", url, true);
    ajax.send(null);
  }
}