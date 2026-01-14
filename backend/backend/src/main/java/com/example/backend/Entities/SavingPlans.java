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
    private Long userId; 

    @Column
    private String startDate;

    @Column
    private String duration;

    @Column
    private Integer savePercentage;

    @Column
    private Integer spendPercentage;

    @Column 
    private Boolean isActive;


    public SavingPlans(){

    }

    public SavingPlans(String startDate, String duration, Integer savePercentage, Integer spendPercentage, Boolean isActive){
        this.startDate = startDate;
        this.duration = duration;
        this.savePercentage = savePercentage;
        this.spendPercentage = spendPercentage;
        this.isActive = isActive;
    }

    public Long getUserId(){
        return this.userId;
    }

    public String getStartDate(){
        return this.startDate;
    }

    public void setStartDate(String newStartDate){
        this.startDate = newStartDate;
    }

    public String getDuration(){
        return this.duration;
    }

    public void getDuration(String newDuration){
        this.duration = newDuration;
    }

    public Integer getSpendPercentage(){
        return this.spendPercentage;
    }

    public void setSpendPercentage(Integer newSpendPercentage){
        this.spendPercentage = newSpendPercentage;
    }

    public Integer getSavePercentage(){
        return this.savePercentage;
    }

     public void setSavePercentage(Integer newSavePercentage){
        this.savePercentage = newSavePercentage;
    }


    public Boolean getIsActive(){
        return this.isActive;
    }

    public void setIsActive(Boolean newIsActive){
        this.isActive = newIsActive;
    }

}


