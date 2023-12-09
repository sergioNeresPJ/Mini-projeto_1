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

