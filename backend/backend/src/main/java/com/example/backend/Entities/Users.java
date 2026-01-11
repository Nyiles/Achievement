package com.example.backend.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long userId;
    @Column(unique = true)
    String username;
    @Column
    String password;

    public Users(String username, String password){
        this.username = username;
        this.password = password;
    }

    public Users(){
        
    }

     public Long getUserId(){
        return  userId;
    }

    public String getUsername(){
        return username;
    }

    public String getPassword(){
        return password;
    }

    public void setUsername(String newUserName){
        this.username = newUserName;
    }

    public void setPassword(String newPassword){
        this.password = newPassword;
    }
}

