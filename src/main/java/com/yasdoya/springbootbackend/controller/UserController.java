package com.yasdoya.springbootbackend.controller;

import com.yasdoya.springbootbackend.exception.ResourceNotFoundException;
import com.yasdoya.springbootbackend.model.User;
import com.yasdoya.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //get all users
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //create user rest api
    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    //get employee by id rest api
    @GetMapping("/users/{id}")
    public ResponseEntity <User> getUserById(@PathVariable Long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :"+id));
        return ResponseEntity.ok(user);
    }

    //update user rest api
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User userDetails){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :"+id));

        user.setUserName(userDetails.getUserName());
        user.setPassword(userDetails.getPassword());
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setRole(userDetails.getRole());
        user.setContact(userDetails.getContact());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    //delete user rest api
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :"+id));

        userRepository.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public User LoginUser(@RequestBody User userCredentials){
        try {
            User user = userRepository.findByEmail(userCredentials.getEmail());

            if(Objects.equals(user.getPassword(), userCredentials.getPassword()))
            {
                user.setPassword("");
                return user;
            }else{
                return null;
            }
        }catch (Exception e){
            return null;
        }
    }
}
