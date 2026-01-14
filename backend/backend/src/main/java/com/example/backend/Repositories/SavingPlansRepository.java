package com.example.backend.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.Entities.SavingPlans;

import jakarta.transaction.Transactional;

@Repository
public interface SavingPlansRepository extends JpaRepository<SavingPlans,Long> {
    @Modifying
    @Transactional
    @Query("Update SavingPlans s set s.isActive =false where s.userId = :userId")
    public int deactiveSavingPlans(@Param("userId") Long userId);

    public List<SavingPlans> findByUserId(Long userId);
    
}