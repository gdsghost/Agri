package com.yasdoya.springbootbackend.controller;

import com.yasdoya.springbootbackend.exception.ResourceNotFoundException;
import com.yasdoya.springbootbackend.model.Treatment;
import com.yasdoya.springbootbackend.model.User;
import com.yasdoya.springbootbackend.repository.TreatmentRepository;
import com.yasdoya.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TreatmentController {

    @Autowired
    private TreatmentRepository treatmentRepository;

    @Autowired
    private UserRepository userRepository;

    //get all treatments
    @GetMapping("/treatments")
    public List<Treatment> getAllTreatments(){
        return treatmentRepository.findAll();
    }

    //create treatment rest api
    @PostMapping("/treatments/create/{userId}")
    public Treatment createTask(@RequestBody Treatment treatment, @PathVariable Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :"+userId));
        treatment.setBioTech(user);
        return treatmentRepository.save(treatment);
    }
}
