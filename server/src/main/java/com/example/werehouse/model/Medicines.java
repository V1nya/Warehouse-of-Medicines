package com.example.werehouse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "medicines")
public class Medicines {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    String name;
    Integer count;
    String type;


    public Medicines(String name, Integer count, String type) {
        this.name = name;
        this.count = count;
        this.type = type;
    }

    public Medicines() {

    }

    public String getName() {
        return name;
    }

    public Integer getCount() {
        return count;
    }

    public String getType() {
        return type;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
