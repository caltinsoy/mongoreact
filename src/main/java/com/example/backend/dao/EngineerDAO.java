package com.example.backend.dao;

import com.example.backend.model.Engineer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EngineerDAO extends MongoRepository<Engineer, String> {
}
