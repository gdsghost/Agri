package com.yasdoya.springbootbackend.repository;

import com.yasdoya.springbootbackend.model.Farm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmRepository extends JpaRepository<Farm, Long> {
}
