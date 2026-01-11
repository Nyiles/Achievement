package com.example.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Entities.Users;


@Repository
public interface UsersRepository extends JpaRepository<Users,Long> {

        /*
        public Users findByUsername(String username);
         */
    
        

        public Users findByUsernameAndPassword(String username, String password);

    
}