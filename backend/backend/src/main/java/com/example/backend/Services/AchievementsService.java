package com.example.backend.Services;

import org.springframework.stereotype.Service;

import com.example.backend.Repositories.AchievementsRepository;

@Service
public class AchievementsService {
    private final AchievementsRepository achievementsRepository;

    public AchievementsService(AchievementsRepository achievementsRepository){
        this.achievementsRepository = achievementsRepository;
    }
}
