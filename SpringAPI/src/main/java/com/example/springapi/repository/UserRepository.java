package com.example.springapi.repository;

import com.example.springapi.api.controller.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByNameAndPass(String name, String pass);
}
