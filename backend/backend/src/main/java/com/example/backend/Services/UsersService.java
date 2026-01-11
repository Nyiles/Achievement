package com.example.backend.Services;



import java.util.List;

import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import com.example.backend.Entities.Users;
import com.example.backend.Repositories.UsersRepository;
@Service
public class UsersService {
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public void saveNewUser(Users user){
        usersRepository.save(user);
    }
    /*
    public Long findByUsername(String username){
        return usersRepository.findByUsername(username).getUserId();
    }
    */
    

    public Users loginUser(Users user){
        return usersRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword());
    }
    

    public List<Users> findAllUsers(){
        return usersRepository.findAll();
    }
}
