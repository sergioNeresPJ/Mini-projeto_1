import java.io.IOException;
// import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/itinerarioservletajax")
public class ItinerarioServletAjax extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String nome = request.getParameter("nome");
		String regiao = request.getParameter("regiao");
		String[] paradas = new String[0];

		System.out.println(request);

		Enumeration<String> parameterNames = request.getParameterNames();

		// Itera sobre os nomes de parâmetros
		while (parameterNames.hasMoreElements()) {
			String paramName = parameterNames.nextElement();

			if (paramName.startsWith("parada")) {
				paradas = request.getParameterValues(paramName);

				for (String paramValue : paradas) {
						System.out.println("Nome do parâmetro: " + paramName + ", Valor: " + paramValue);
				}
			}
		}

		System.out.println(nome);
		System.out.println(regiao);
		for(int i = 0; i < paradas.length; i++)
			System.out.println(paradas[i]);
	}
}
