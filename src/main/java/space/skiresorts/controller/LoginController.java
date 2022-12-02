package space.skiresorts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import space.skiresorts.model.Domain;

import space.skiresorts.service.OauthService;

import java.util.List;
import java.util.Optional;
@Controller
@RequestMapping("api/v1/login")
public class LoginController {

    @Autowired
    private OauthService oauthService;

    @PostMapping
    public ResponseEntity<String> login() {
        // List<Domain> domains = domainRepository.findAll();
        // return new ResponseEntity<>(domains, HttpStatus.OK);
        try {
            oauthService.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbXktZG9tYWluLmF1dGgwLmNvbSIsInN1YiI6ImF1dGgwfDEyMzQ1NiIsImF1ZCI6Im15X2NsaWVudF9pZCIsImV4cCI6MTMxMTI4MTk3MCwiaWF0IjoxMzExMjgwOTcwLCJuYW1lIjoiSmFuZSBEb2UiLCJnaXZlbl9uYW1lIjoiSmFuZSIsImZhbWlseV9uYW1lIjoiRG9lIiwiZ2VuZGVyIjoiZmVtYWxlIiwiYmlydGhkYXRlIjoiMDAwMC0xMC0zMSIsImVtYWlsIjoiamFuZWRvZUBleGFtcGxlLmNvbSIsInBpY3R1cmUiOiJodHRwOi8vZXhhbXBsZS5jb20vamFuZWRvZS9tZS5qcGcifQ.FKw0UVWANEqibD9VTC9WLzstlyc_IRnyPSpUMDP3hKc");
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("bravo", HttpStatus.OK);
    }
    
}
