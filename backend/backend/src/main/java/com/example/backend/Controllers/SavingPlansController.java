package com.example.backend.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Services.SavingPlansService;

@RestController
public class SavingPlansController {
    private final SavingPlansService savingPlansService;

    public SavingPlansController(SavingPlansService savingPlansService){
        this.savingPlansService = savingPlansService;
    }

}
