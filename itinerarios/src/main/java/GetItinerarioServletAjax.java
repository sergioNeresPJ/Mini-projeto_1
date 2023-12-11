import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

@WebServlet("/getitinerario")
public class GetItinerarioServletAjax extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Configuração do Content-Type para resposta em JSON
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // Parâmetro da região vindo da requisição
        String regiaoParam = request.getParameter("regiao");

        // Criando uma lista para armazenar os resultados
        ArrayList<JSONObject> resultados = new ArrayList<>();

        try {
            // Carregando o XML a partir da string
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(getServletContext().getResourceAsStream("itinerarios.xml"));

            // Obtendo a lista de todos os elementos ITINERARIO
            NodeList itinerarios = document.getElementsByTagName("ITINERARIO");

            // Iterando sobre os elementos ITINERARIO
            for (int i = 0; i < itinerarios.getLength(); i++) {
                Node itinerarioNode = itinerarios.item(i);

                if (itinerarioNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element itinerarioElement = (Element) itinerarioNode;

                    // Obtendo os elementos dentro do ITINERARIO
                    String nome = itinerarioElement.getElementsByTagName("NOME").item(0).getTextContent();
                    String regiao = itinerarioElement.getElementsByTagName("REGIAO").item(0).getTextContent();

                    // Verificando se a região coincide com o parâmetro da requisição
                    if (regiao.toLowerCase().contains(regiaoParam.toLowerCase())) {
                        NodeList paradas = itinerarioElement.getElementsByTagName("PARADA");

                        // Construindo o objeto JSON
                        JSONObject resultado = new JSONObject();
                        resultado.put("nome", nome);
                        resultado.put("regiao", regiao);

                        JSONArray paradasArray = new JSONArray();
                        for (int j = 0; j < paradas.getLength(); j++) {
                            paradasArray.put(paradas.item(j).getTextContent());
                        }

                        resultado.put("paradas", paradasArray);
                        resultado.put("uso", itinerarioElement.getElementsByTagName("USO").item(0).getTextContent());

                        resultados.add(resultado);
                    }
                }
            }

            // Criando a resposta JSON
            PrintWriter out = response.getWriter();
            JSONArray jsonArray = new JSONArray(resultados);
            out.println(jsonArray.toString());

        } catch (Exception e) {
            // Lidar com exceções (por exemplo, log ou retornar um erro no JSON)
            e.printStackTrace();
        }
    }
}