package com.example.backend.util;

import com.example.backend.model.Engineer;
import com.google.gson.Gson;

public class CreateObject {

    public static Engineer createObjectFromFields(String engineer) {
        Gson gson = new Gson();
         Engineer myClass = gson.fromJson(engineer, Engineer.class);
        return myClass;
    }
}
