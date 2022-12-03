package space.skiresorts.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import space.skiresorts.service.UserRepository;


@Controller
@RequestMapping("api/v1/users")
public class UserController{

    private UserRepository repository;



}

