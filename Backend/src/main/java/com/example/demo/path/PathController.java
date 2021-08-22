package com.example.demo.path;

import com.example.demo.user.UserEntity;
import com.example.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/path")
public class PathController {

    private final UserRepository userRepository;

    @Autowired
    public PathController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/finish")
    public void finish() {
        UserEntity user = userRepository.getById(1);
        user.setFinishedPaths(user.getFinishedPaths() + 1);
        userRepository.save(user);
    }

    @PostMapping("/{paths}")
    public void set(@PathVariable int paths) {
        UserEntity user = userRepository.getById(1);
        user.setFinishedPaths(paths);

        userRepository.save(user);
    }
}
