package com.yasdoya.springbootbackend.controller;

import com.yasdoya.springbootbackend.exception.ResourceNotFoundException;
import com.yasdoya.springbootbackend.model.Farm;
import com.yasdoya.springbootbackend.model.User;
import com.yasdoya.springbootbackend.repository.FarmRepository;
import com.yasdoya.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FarmController {

    @Autowired
    private FarmRepository farmRepository;

    @Autowired
    private UserRepository userRepository;

    //get all Farms
    @GetMapping("/farms")
    public List<Farm> getAllFarms(){
        return farmRepository.findAll();
    }

    //create farm rest api
    @PostMapping("/farms/create/{userId}")
    public Farm createFarm(@RequestBody Farm farm,@PathVariable Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :"+userId));
        farm.setFarmer(user);
        return farmRepository.save(farm);
    }

    //get farm by id rest api
    @GetMapping("/farms/{id}")
    public ResponseEntity<Farm> getFarmById(@PathVariable Long id){
        Farm farm = farmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Farm not exit with id :"+id));
        return ResponseEntity.ok(farm);
    }

    //update farm rest api
    @PutMapping("/farms/{id}")
    public ResponseEntity<Farm> updateFarm(@PathVariable Long id,@RequestBody Farm farmDetails){
        Farm farm = farmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Farm not exit with id :"+id));

        farm.setFarm_name(farmDetails.getFarm_name());
        farm.setFarm_type(farmDetails.getFarm_type());
        farm.setFarm_area(farmDetails.getFarm_area());
        farm.setFarm_description(farmDetails.getFarm_description());

        Farm updatedFarm = farmRepository.save(farm);
        return ResponseEntity.ok(updatedFarm);
    }

    //delete farm rest api
    @DeleteMapping("/farms/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteFarm(@PathVariable Long id){
        Farm farm = farmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Farm not exit with id :"+id));

        farmRepository.delete(farm);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
