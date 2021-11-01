package com.yasdoya.springbootbackend.controller;


import com.yasdoya.springbootbackend.exception.ResourceNotFoundException;
import com.yasdoya.springbootbackend.model.Task;
import com.yasdoya.springbootbackend.model.User;
import com.yasdoya.springbootbackend.repository.TaskRepository;
import com.yasdoya.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    //get all tasks
    @GetMapping("/tasks")
    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    //create task rest api
    @PostMapping("/tasks/create/{userId}")
    public Task createTask(@RequestBody Task task, @PathVariable Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :"+userId));
        task.setAssignedEmployee(user);
        return taskRepository.save(task);
    }
}
