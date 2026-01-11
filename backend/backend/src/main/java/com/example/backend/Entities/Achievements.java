package com.example.backend.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Achievements {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long achievementsId;


    @Column
    private String completionDate;

    public Achievements(){

    }

    public Achievements( String completionDate){
        this.completionDate = completionDate;
    }

    public String getCompletionDate(){
        return this.completionDate;
    }
}
