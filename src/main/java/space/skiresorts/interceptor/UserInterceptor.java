package space.skiresorts.interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Component
public class UserInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("jwt_token");
        if (token == null)  return false;
        String [] jwt_token = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String header = new String(decoder.decode(jwt_token[0]));
        Map<String,Object> payload = new ObjectMapper().readValue(new String(decoder.decode(jwt_token[1])), HashMap.class);

        System.out.println(payload.get("email"));
        // verifici ce endpoint vrea sa foloseasca
        // functie de asta decizi daca ii permiti sa continue fara autentificare ex:
        // if (request.getMethod() == GET && request.getRequestURI() == "/api/v1/domains") return true
        // unde return true ii permite sa intre mai departe in controller si sa faca queries etc si
        // return false ii intoarce raspunsul fara sa il mai treaca prin controller

        // TODO: 30.11.2022
        // /api/v1/domains apare deja in 2 locuri, poate ar trebui sa faci un enum sau niste constante cu dansa!

        // ai luat mailul
        // te duci si il cauti in baza de date
        // dupa ce ai adus userul verifici ce dreptuiri are
        // ii permiti sau nu sa continue requestul




//        System.out.println(request.getHeader("test"));
//        System.out.println(request.getMethod() + " -> " + request.getRequestURI());


        return true;
    }

}
