package com.yasdoya.springbootbackend.controller;

import com.yasdoya.springbootbackend.exception.ResourceNotFoundException;
import com.yasdoya.springbootbackend.model.Farm;
import com.yasdoya.springbootbackend.model.Plant;
import com.yasdoya.springbootbackend.repository.FarmRepository;
import com.yasdoya.springbootbackend.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PlantController {

    @Autowired
    private PlantRepository plantRepository;

    @Autowired
    private FarmRepository farmRepository;

    //get all plants
    @GetMapping("/plants")
    public List<Plant> getAllPlants(){
        return plantRepository.findAll();
    }

    //create plant rest api
    @PostMapping("/plants/create/{farmId}")
    public Plant createPlant(@RequestBody Plant plant, @PathVariable Long farmId){
        Farm farm = farmRepository.findById(farmId)
                .orElseThrow(() -> new ResourceNotFoundException("Farm not exit with id :"+farmId));
        plant.setFarm(farm);
        return plantRepository.save(plant);
    }
}
