package com.example.demo.user;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int finishedPaths;

    @Column
    private int percent;

    @Column
    private int hours;

    @Column
    private int threads;
}
