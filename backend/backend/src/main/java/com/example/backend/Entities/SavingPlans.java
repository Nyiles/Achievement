package com.example.backend.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class SavingPlans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long savingPlansId;

    @Column
    private String startDate;

    @Column
    private String duration;

    @Column
    private String information;

    @Column 
    private Boolean isActive;


    public SavingPlans(){

    }

    public SavingPlans(String startDate, String duration, String information, Boolean isActive){
        this.startDate = startDate;
        this.duration = duration;
        this.information = information;
        this.isActive = isActive;
    }

    public String getStartDate(){
        return this.startDate;
    }

    public String getDuration(){
        return this.duration;
    }


    public String getInformation(){
        return this.information;
    }

    public Boolean getisActive(){
        return this.isActive;
    }

}


