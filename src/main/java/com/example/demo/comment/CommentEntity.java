package com.example.demo.comment;

import com.example.demo.forum.ForumEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String text;

    @Column
    private String author;

    @ManyToOne
    @JoinColumn(name = "forum_id")
    @JsonIgnore
    private ForumEntity forum;
}
