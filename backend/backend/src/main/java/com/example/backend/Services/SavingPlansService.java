package com.example.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Repositories.SavingPlansRepository;

@Service
public class SavingPlansService {

    @Autowired
    private final SavingPlansRepository savingPlansRepository;

    public SavingPlansService(SavingPlansRepository savingPlansRepository){
        this.savingPlansRepository = savingPlansRepository;
    }

}

