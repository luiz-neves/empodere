package com.example.demo.forum;

import lombok.Data;

@Data
public class ForumRequest {
    private String title;
    private String text;
    private String author;

    public ForumEntity toForumEntity() {
        ForumEntity entity = new ForumEntity();
        entity.setTitle(title);
        entity.setText(text);
        entity.setAuthor(author);
        return entity;
    }
}
