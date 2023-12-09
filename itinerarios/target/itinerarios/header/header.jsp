<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Itinerarios</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #69aa6f;
            color: #fff;
            padding: 10px;
        }

        nav {
            text-align: center;
        }

        ul.menu {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        ul.menu li {
            display: inline-block;
            margin-right: 10px;
            position: relative;
        }

        ul.menu a {
            text-decoration: none;
            color: #fff;
            padding: 10px;
            display: block;
        }

        ul.menu a:hover {
            color: black;
        }

        ul.submenu {
            display: none;
            position: absolute;
            background-color: white;
            list-style-type: none;
            padding: 0;
            margin: 0;
            top: 100%;
        }

        ul.menu li:hover ul.submenu {
            display: block;
        }

        ul.submenu li {
            margin: 0;
            padding: 0;
        }

        ul.submenu a {
            color: black;
            padding: 10px;
            display: block;
            text-decoration: none;
            position: relative;
            border: 1px solid rgb(143, 141, 141);
        }

        ul.submenu a:hover {
            color: #69aa6f;
        }
    </style>
</head>

<body>
    <header>
        <nav>
            <ul class="menu">
                <li><a href="../index.jsp" target="_blank">Home</a></li>
                <li>
                    <a href="#">Rotas</a>
                    <ul class="submenu">
                        <li><a href="../index.jsp" target="_blank">Itinerarios</a></li>
                        <li><a href="cadastro_itinerarios" target="_blank">Cadastro de Itinerarios</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Cartoes</a>
                    <ul class="submenu">
                        <li><a href="#">Cartao Unitario</a></li>
                        <li><a href="#">Vale Transporte</a></li>
                        <li><a href="#">Cartao Cidadao</a></li>
                        <li><a href="#">Cartao Senior</a></li>
                        <li><a href="#">Cartao Estudante</a></li>
                    </ul>
                </li>
                <li><a href="#">Transparencia</a></li>
                <li><a href="#">Fale Conosco</a></li>
            </ul>
        </nav>
    </header>
</body>

</html>