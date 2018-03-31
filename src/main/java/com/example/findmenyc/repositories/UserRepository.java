package com.example.findmenyc.repositories;

import com.example.findmenyc.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}