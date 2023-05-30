package com.example.werehouse.controller;

import com.example.werehouse.model.Medicines;
import com.example.werehouse.repository.MedicinesRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://172.20.10.6:3000",
        allowedHeaders = "*")

public class MainController {

    @Autowired
    private MedicinesRepository medicinesRepo;
    private ObjectMapper objectMapper = new  ObjectMapper();


    @GetMapping("/getAllMedicines")
    public ResponseEntity<String> getAllMedicines() {
        try {

            List<Medicines> medicines = medicinesRepo.findAll();

            String json = objectMapper.writeValueAsString(medicines);

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(json);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/createNewMedicines")
    public void createNewMedicines(@RequestBody String json){

        Medicines newMedicines = null;
        try {
            newMedicines = objectMapper.readValue(json, Medicines.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        medicinesRepo.save(newMedicines);

    }
    @PostMapping("/removeMedicines")
    public void removeMedicines(@RequestBody String json){


        Medicines newMedicines = null;
        try {
            newMedicines = objectMapper.readValue(json, Medicines.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        medicinesRepo.deleteById(newMedicines.getId());

    }
}
