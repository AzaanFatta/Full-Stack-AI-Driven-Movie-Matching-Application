//package com.example.springapi.service;
//
//import com.example.springapi.api.controller.model.User;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {

//
//    private List<User> userList;
//
//    public UserService() {
//        userList = new ArrayList<>();
//
//        User user1 = new User("a", "1");
//        User user2 = new User("b", "2");
//
//        userList.addAll(Arrays.asList(user1, user2));
//    }
//
//    public Optional<User> getUser(String name, String pass) {
//        return userList.stream()
//                .filter(user -> user.getName().equals(name) && user.getPass().equals(pass))
//                .findFirst();
//    }
//}




package com.example.springapi.service;

import com.example.springapi.api.controller.model.UserEntity;
import com.example.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<String[]> getUser(String name, String pass) {
        Optional<UserEntity> userEntity = userRepository.findByNameAndPass(name, pass);
        if (userEntity.isPresent()) {
            UserEntity user = userEntity.get();
            return Optional.of(new String[]{user.getName(), user.getPass()});
        }
        return Optional.empty();
    }
}

