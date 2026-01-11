package com.example.backend.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Entities.Users;
import com.example.backend.Services.UsersService;

@RestController
@RequestMapping("/users")
public class UsersController {
    private final UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }
    

    @PostMapping("/register")
    public Users saveNewUser(@RequestBody Users user){
        usersService.saveNewUser(user);
        return user;
    }
    
    /*
    @GetMapping("/id")
    public Long findUserId(@RequestParam String username){
        return usersService.findByUsername(username);
    }
     */
        

    
   
    @GetMapping("/all")
    public List<Users> getAllUsers(){
        return usersService.findAllUsers();
    }

    @PostMapping("/login")
    public Users findUserId(@RequestBody Users user){
        return usersService.loginUser(user);
    }

}

     

