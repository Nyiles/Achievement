package com.example.backend.Controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Entities.Transactions;
import com.example.backend.Services.TransactionsSerivce;

@RestController
@RequestMapping("/transactions")
public class TransactionsController {
  
    private final TransactionsSerivce transactionsService;

    public TransactionsController(TransactionsSerivce transactionsSerivce){
        this.transactionsService = transactionsSerivce;
    }
    @PostMapping("/save")
    public Transactions saveTransaction(@RequestBody Transactions transaction){
        transactionsService.saveTransaction(transaction);
       return transaction;
    }

    @GetMapping("/getfromid")
        public List <Transactions> getFromId(@RequestParam Long id){
            return transactionsService.getFromId(id);
        }
    
    @DeleteMapping("/delete")
        public void deleteTransaction(@RequestParam Long id){
            transactionsService.deleteTransaction(id);

        } 

}
