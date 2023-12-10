import java.io.IOException;
import java.util.ArrayList;
// import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.List;

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
		ArrayList<String> paradas = new ArrayList<>();

		System.out.println(request);

		Enumeration<String> parameterNames = request.getParameterNames();

		// Itera sobre os nomes de parâmetros
		int i = 0;
		String paramName;

		while (parameterNames.hasMoreElements()) {
			paramName = parameterNames.nextElement();

			if (paramName.startsWith("parada")) {
				System.out.println(paramName);
				paradas.add(request.getParameter(paramName));
				System.out.println("Nome do parametro: " + paramName + ", Valor: " + paradas.get(i));
				i++;
			}
		}

		
	}
}
