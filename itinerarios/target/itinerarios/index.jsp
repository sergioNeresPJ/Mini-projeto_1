<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Itinerários</title>
    <link rel="stylesheet" href="../styles/home.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div id="header-placeholder"></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $("#header-placeholder").load("./header/header.jsp");
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Chama a função para carregar os primeiros 8 itinerários ao carregar a página
            getItinerarios();
        });
    </script>

    <!-- Adicione este input para pesquisa -->
    <input type="text" id="searchInput" oninput="filtrarItinerarios()" placeholder="Pesquisar por região...">
    

    <div id="conteudo-dinamico" class="row row-cols-2">
        <!-- O conteúdo dinâmico vai aqui -->
    </div>

    

    <script src="./ajax_card.js"></script>
</body>
</html>
