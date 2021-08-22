package com.example.demo.forum;

import com.example.demo.comment.CommentEntity;
import com.example.demo.comment.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/forum")
public class ForumController {

    private final ForumRepository forumRepository;

    private final CommentRepository commentRepository;

    @Autowired
    public ForumController(ForumRepository forumRepository, CommentRepository commentRepository) {
        this.forumRepository = forumRepository;
        this.commentRepository = commentRepository;
    }

    @PostMapping
    public void create(@RequestBody ForumRequest forum) {
        ForumEntity entity = forum.toForumEntity();
        forumRepository.save(entity);
    }

    @GetMapping
    public List<ForumEntity> get() {
        return forumRepository.findAll();
    }

    @GetMapping("/{id}")
    public ForumEntity getById(@PathVariable int id) {
        Optional<ForumEntity> entity = forumRepository.findById(id);

        if (entity.isEmpty()) {
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Forum post not found"
            );
        }

        ForumEntity forum = entity.get();

        for (CommentEntity comment : commentRepository.findAll()) {
            if (forum.getId() == comment.getForum().getId()) {
                comment.setForum(null);
                forum.getComments().add(comment);
            }
        }

        return forum;
    }
}
