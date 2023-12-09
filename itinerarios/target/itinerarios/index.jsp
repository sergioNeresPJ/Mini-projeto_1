<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="pt-BR">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>itinerários</title>
        <link rel="stylesheet" href="../styles/home.css">
        
    </head>
    <body>

        <div id="header-placeholder"></div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>
            $(document).ready(function () {
                $("#header-placeholder").load("./header/header.jsp");
            });

            
        </script>

        <button onclick="getItinerarios()">GetItinerarios</button>

    </body>
    <script src="./ajax_card.js"></script>
</html>