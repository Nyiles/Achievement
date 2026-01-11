package com.example.backend.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Services.AchievementsService;

@RestController
public class AchievementsController {
    private final AchievementsService achievementsService;

    public AchievementsController(AchievementsService achievementsService){
        this.achievementsService = achievementsService;
    }
}
