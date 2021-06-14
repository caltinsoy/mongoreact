package com.example.backend.controller;

import com.example.backend.model.Engineer;
import com.example.backend.service.EngineerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class EngineerController {


    private final EngineerService engineerService;

    @Autowired
    public EngineerController(EngineerService engineerService) {
        this.engineerService = engineerService;
    }

    @GetMapping("/")
    public List<Engineer> getEngineers() {
        return engineerService.getAllEngineers();
    }

    @GetMapping("/{id}")
    public Engineer getUserById(@PathVariable String id) {
        return engineerService.getEngineerById(id);
    }

    @PostMapping("/")
    public Engineer saveEngineers(@RequestBody Engineer user) {
        return engineerService.save(user);
    }

    @PutMapping("/")
    public Engineer updateEngineer(@RequestBody Engineer newUser) {
        Engineer oldUser = getEngineer(newUser);
        engineerService.save(oldUser);
        return oldUser;
    }


    private Engineer getEngineer(Engineer newUser) {
        Engineer oldUser = engineerService.getEngineerById(newUser.getId());
        oldUser.setName(newUser.getName());
        oldUser.setEmail(newUser.getEmail());
        oldUser.setPassword(newUser.getPassword());
        oldUser.setLastName(newUser.getLastName());
        return oldUser;
    }

    @DeleteMapping("/{id}")
    public String deleteEngineerById(@PathVariable String id) {
        engineerService.deleteEngineerById(id);
        return id;
    }


}
