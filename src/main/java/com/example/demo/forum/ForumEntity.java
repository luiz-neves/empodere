package com.example.demo.forum;

import com.example.demo.comment.CommentEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Setter
@Getter
public class ForumEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String title;

    @Column
    private String author;

    @Column
    private String text;

    @OneToMany(targetEntity = CommentEntity.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "forum_id")
    private List<CommentEntity> comments;

    public void addComment(CommentEntity comment) {
        comment.setForum(this);
        comments.add(comment);
    }
}
