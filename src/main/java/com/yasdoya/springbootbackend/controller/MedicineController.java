package com.yasdoya.springbootbackend.controller;

import com.yasdoya.springbootbackend.model.Medicine;
import com.yasdoya.springbootbackend.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MedicineController {

    @Autowired
    private MedicineRepository medicineRepository;

    //get all medicine
    @GetMapping("/medicines")
    public List<Medicine> getAllMedicine(){
        return medicineRepository.findAll();
    }

    //create task rest api
    @PostMapping("/medicines/create")
    public Medicine createMedicine(@RequestBody Medicine medicine){
        return medicineRepository.save(medicine);
    }
}
