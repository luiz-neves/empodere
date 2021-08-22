package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/reset")
    public String reset() {
        UserEntity user = userRepository.getById(1);

        user.setFinishedPaths(0);
        user.setHours(0);
        user.setPercent(0);

        userRepository.save(user);

        return "Ok";
    }

    @GetMapping
    public UserEntity get() {
        return userRepository.findById(1).get();
    }
}
