package com.example.backend.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Entities.Transactions;
import com.example.backend.Repositories.TransactionsRepository;

import jakarta.persistence.Id;

@Service
public class TransactionsSerivce {
    @Autowired
    private final TransactionsRepository transactionsRepository;

    public TransactionsSerivce(TransactionsRepository transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }

    public void saveTransaction(Transactions transaction){
        transactionsRepository.save(transaction);
    }

    public List <Transactions> getFromId(Long id){
        return transactionsRepository.findByUserId(id);
    }

    public void deleteTransaction(Long id){
        transactionsRepository.deleteById(id);
    }
}
