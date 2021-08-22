package com.example.demo.hours;

import com.example.demo.user.UserEntity;
import com.example.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hour")
public class HourController {

    private final UserRepository userRepository;

    @Autowired
    public HourController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/add/{hours}")
    public void add(@PathVariable int hours) {
        UserEntity user = userRepository.getById(1);
        user.setHours(user.getHours() + hours);
        userRepository.save(user);
    }

    @PostMapping("/{hours}")
    public void set(@PathVariable int hours) {
        UserEntity user = userRepository.getById(1);
        user.setHours(hours);

        userRepository.save(user);
    }
}
