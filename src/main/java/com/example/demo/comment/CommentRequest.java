package com.example.demo.comment;

import lombok.Data;

@Data
public class CommentRequest {
    private String author;
    private String text;
    private int forumId;

    public CommentEntity toEntity() {
        CommentEntity entity = new CommentEntity();
        entity.setText(text);
        entity.setAuthor(author);
        return entity;
    }
}
