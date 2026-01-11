package com.example.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Entities.Achievements;

@Repository
public interface AchievementsRepository extends JpaRepository<Achievements,Long> {

}