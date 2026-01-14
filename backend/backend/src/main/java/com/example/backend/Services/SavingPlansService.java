package com.example.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Entities.SavingPlans;
import com.example.backend.Repositories.SavingPlansRepository;

@Service
public class SavingPlansService {

    @Autowired
    private final SavingPlansRepository savingPlansRepository;

    public SavingPlansService(SavingPlansRepository savingPlansRepository){
        this.savingPlansRepository = savingPlansRepository;
    }

    public Integer archiveAllPlans(Long id){
        return savingPlansRepository.deactiveSavingPlans(id);
    }

    public void setNewActivePlan(SavingPlans savingPlan){
        savingPlansRepository.save(savingPlan);
    }

    public List<SavingPlans> getAllById(Long id){
        return savingPlansRepository.findByUserId(id);
    }
}

