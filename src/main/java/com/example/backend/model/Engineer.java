package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document
@Data
@AllArgsConstructor
public class Engineer implements Serializable {
    @Id
    private String id;
    private String Name;
    private String lastName;
    private String Email;
    private String Password;

}
