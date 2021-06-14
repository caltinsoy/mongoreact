package com.example.backend.service;

import com.example.backend.model.Engineer;

import java.util.List;

public interface EngineerService {
    public List<Engineer> getAllEngineers();

    void insertEngineer(String engineer);

    void deleteEngineerById(String id);

    Engineer getEngineerById(String id);

    Engineer save(Engineer user);
}
