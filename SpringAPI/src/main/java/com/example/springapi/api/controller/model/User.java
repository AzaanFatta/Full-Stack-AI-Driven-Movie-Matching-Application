package com.example.springapi.api.controller.model;
import com.example.springapi.api.controller.model.User;
import com.example.springapi.service.UserService;

public class User {
    private String pass;
    private String name;

    public User(String name, String pass) {
        this.name = name;
        this.pass = pass;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String name) {
        this.pass = pass;
    }



}
