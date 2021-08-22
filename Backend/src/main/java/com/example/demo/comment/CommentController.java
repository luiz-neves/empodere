package com.example.demo.comment;

import com.example.demo.forum.ForumEntity;
import com.example.demo.forum.ForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController {

    private final CommentRepository commentRepository;

    private final ForumRepository forumRepository;

    @Autowired
    public CommentController(CommentRepository commentRepository, ForumRepository forumRepository) {
        this.commentRepository = commentRepository;
        this.forumRepository = forumRepository;
    }

    @PostMapping
    public void create(@RequestBody CommentRequest request) {
        ForumEntity forum = forumRepository.findById(request.getForumId()).get();
        CommentEntity comment = request.toEntity();

        comment.setForum(forum);
        forum.addComment(comment);

        commentRepository.save(comment);
        forumRepository.save(forum);
    }
}
