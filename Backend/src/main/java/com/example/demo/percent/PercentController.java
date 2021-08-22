package com.example.demo.percent;

import com.example.demo.user.UserEntity;
import com.example.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/percent")
public class PercentController {

    private final UserRepository userRepository;

    @Autowired
    public PercentController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/add/{percent}")
    public void add(@PathVariable int percent) {
        UserEntity user = userRepository.getById(1);
        user.setPercent(Math.min(user.getPercent() + percent, 100));
        userRepository.save(user);
    }

    @PostMapping("/{percent}")
    public void set(@PathVariable int percent) {
        UserEntity user = userRepository.getById(1);
        user.setPercent(Math.min(percent, 100));

        userRepository.save(user);
    }
}
