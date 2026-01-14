package com.example.backend.Entities;

import java.time.LocalDate;

import org.springframework.cglib.core.Local;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long userId;

    @Column
    private String type;

    @Column
    private Double amount;

    @Column
    private LocalDate inputDate;

    @Column
    private LocalDate transactionDate;

    @Column
    private String withdrawlReason;

    @Column
    private Integer necessityScale;
    
    public Transactions(){

    }

    public Transactions(Long userId, String type, Double amount, LocalDate inputDate,LocalDate transactionDate,String withdrawlReason,Integer necessityScale ){
        this.userId = userId;
        this.type = type;
        this.amount = amount;
        this.inputDate = inputDate;
        this.transactionDate = transactionDate;
        this.withdrawlReason = withdrawlReason;
        this.necessityScale = necessityScale;
    }

    public Long getId(){
        return this.id;
    }

    public Long getUserId(){
        return this.userId;
    }

    public void setUserId(Long newUserId){
        this.userId = newUserId;
    }

    public String getType(){
        return this.type;
    }

    public void setType(String newType){
        this.type = newType;
    }

    public Double getAmount(){
        return this.amount;
    }

    public void setAmount(Double newAmount){
        this.amount = newAmount;
    }

    public LocalDate getInputDate(){
        return this.inputDate;
    }

    public void setInputDate(LocalDate newInputDate){
        this.inputDate = newInputDate;
    }
    
    public LocalDate getTransactionDate(){
        return this.transactionDate;
    }

    public void setTransactionDate(LocalDate newTransactionDate){
         this.transactionDate = newTransactionDate;
    }

    public String getWithdrawlReason(){
        return this.withdrawlReason;
    }

    public void setWithdrawlReason(String newWithdrawlReason){
        this.withdrawlReason = newWithdrawlReason;
    }


    public Integer getNecessityScale(){
        return this.necessityScale;
    }

    public void setNessecityScale(Integer newNecessityScale){
        this.necessityScale = newNecessityScale;
    }

}

