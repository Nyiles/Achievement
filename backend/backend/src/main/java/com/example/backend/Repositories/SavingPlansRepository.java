package com.example.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Entities.SavingPlans;

@Repository
public interface SavingPlansRepository extends JpaRepository<SavingPlans,Long> {

}