package com.example.backend.service.impl;

import com.example.backend.dao.EngineerDAO;
import com.example.backend.model.Engineer;
import com.example.backend.service.EngineerService;
import com.example.backend.util.CreateObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EngineerServiceImpl implements EngineerService {

    private final EngineerDAO engineerDAO;

    @Autowired
    public EngineerServiceImpl(EngineerDAO engineerDAO) {
        this.engineerDAO = engineerDAO;
    }

    public List<Engineer> getAllEngineers() {
        return engineerDAO.findAll();
    }

    @Override
    public void insertEngineer(String engineer) {
        Engineer engineerr = CreateObject.createObjectFromFields(engineer);
        engineerDAO.insert(engineerr);
    }

    @Override
    public void deleteEngineerById(String id) {
        engineerDAO.deleteById(id);
    }

    @Override
    public Engineer getEngineerById(String id) {
        return engineerDAO.findById(id).orElse(null);
    }

    @Override
    public Engineer save(Engineer engineer) {
        return engineerDAO.save(engineer);
    }


}
