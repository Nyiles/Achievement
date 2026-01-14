package com.example.backend.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Entities.SavingPlans;

import com.example.backend.Services.SavingPlansService;

@RestController
@RequestMapping("savingplans")
public class SavingPlansController {
    private final SavingPlansService savingPlansService;

    public SavingPlansController(SavingPlansService savingPlansService){
        this.savingPlansService = savingPlansService;
    }
 
    @PostMapping("/new")
    public void addNewPlans(@RequestBody SavingPlans savingPlans){
        savingPlansService.setNewActivePlan(savingPlans);
    }

    @PutMapping("/archive")
    public Integer archivePlans(@RequestParam Long id){
        return savingPlansService.archiveAllPlans(id);
    }

    @GetMapping("/allbyid")
    public List<SavingPlans> getAll(@RequestParam Long id){
        return savingPlansService.getAllById(id);
    }
}
