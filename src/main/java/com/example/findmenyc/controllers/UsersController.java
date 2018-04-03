package com.example.findmenyc.controllers;

import com.example.findmenyc.models.User;
import com.example.findmenyc.repositories.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@RestController
public class UsersController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{userId}")
    public Optional<User> findUserById(@PathVariable Long userId) throws NotFoundException {
        Optional<User> foundUser = userRepository.findById(userId);

        if (!foundUser.isPresent()) {
            throw new NotFoundException("User with ID of " + userId + " was not found!");
        }

        return foundUser;
    }

    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PatchMapping("/users/{userId}")
    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) throws NotFoundException {

        Optional<User> userFromDb = userRepository.findById(userId);

        if (!userFromDb.isPresent()) {
            throw new NotFoundException("User with ID of " + userId + " was not found!");
        }

        User foundUser = userFromDb.get();

        foundUser.setUserName(userRequest.getUserName());
        foundUser.setFirstName(userRequest.getFirstName());
        foundUser.setLastName(userRequest.getLastName());
        foundUser.setLastSearch(userRequest.getLastSearch());
        foundUser.setAdmin(userRequest.isAdmin());

        return userRepository.save(foundUser);
    }

    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) throws EmptyResultDataAccessException {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }


    // Exception handlers
    @ExceptionHandler
    void handleUserNotFound(
            NotFoundException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
    }

    @ExceptionHandler
    void handleDeleteNotFoundException(
            EmptyResultDataAccessException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value());
    }
}
