<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Itinerário</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../styles/cadastro_itinerarios.css">
</head>

<body>
    <!-- Inclusão do cabeçalho -->
    <header id="header-placeholder"></header>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        // Função para incluir o cabeçalho na página
        $(document).ready(function () {
            $("#header-placeholder").load("../header/header.jsp");
        });

        let qtdParadas = 0;
        // Função para adicionar campo de parada
        function adicionarCampoParada() {
            var containerParadas = document.getElementById("containerParadas");

            // Criar novo campo de parada
            var novoCampo = document.createElement("div");
            novoCampo.className = "parada-container";

            var inputParada = document.createElement("input");
            inputParada.type = "text";
            inputParada.className = "input-parada";
            inputParada.placeholder = "Ex: Av. Bandeirantes";
            inputParada.name = `parada${qtdParadas}`

            var botaoRemover = document.createElement("button");
            botaoRemover.type = "button";
            botaoRemover.innerHTML = '<i class="bi bi-dash-circle" onclick="removerCampoParada()"></i>';
            botaoRemover.onclick = function () {
                containerParadas.removeChild(novoCampo);
            };

            novoCampo.appendChild(inputParada);
            novoCampo.appendChild(botaoRemover);

            containerParadas.appendChild(novoCampo);

            qtdParadas++;
        }
    </script>

    <!-- Formulário de cadastro -->
    <section>
        <article>
            <h1>Cadastro de Itinerario</h1>
            <form>
                <!-- Campo para o nome do itinerário -->
                <label for="nome">Nome do Itinerario:</label>
                <input type="text" id="nome" name="nome" placeholder="Ex: 80 - UFSCar"required maxlength="50">
                <br>

                <!-- Campo para a região -->
                <label for="regiao">Região:</label>
                <input type="text" id="regiao" name="regiao" placeholder="Ex: UFSCar"required maxlength="50">
                <br>

                <!-- Campo para paradas -->
                <label for="parada">Paradas:</label>
                <div id="containerParadas">
                    <div class="parada-container">
                        <input type="text" class="input-parada" placeholder="Ex: Av. Barao de Tatui">
                    </div>
                </div>
                <!-- Ícone para adicionar parada -->
                <i class="bi bi-plus-circle" fill="currentColor" onclick="adicionarCampoParada()"></i>
                <br>

                <!-- Botão para cadastrar -->
                <button class="submit" type="button" onclick="postItinerario()">Cadastrar Itinerario</button>
            </form>

        </article>
    </section>
    <script src="../ajax_card.js"></script>
</body>

</html>