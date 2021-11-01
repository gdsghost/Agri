package com.yasdoya.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "plants")
@JsonIgnoreProperties({"treatments","farm"})
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "plant_name")
    private String plant_name;

    @Column(name = "plant_type")
    private String plant_type;

    @Column(name = "plant_health")
    private String plant_health;

    @Column(name = "plant_harvest")
    private boolean plant_harvest;

    @Column(name = "plant_description")
    private String plant_description;

    @ManyToOne
    @JoinColumn(name = "farm_id")
    private Farm farm;

    @ManyToMany(mappedBy = "plants")
    private Collection<Treatment> treatments;

    public Plant(){

    }

    public Plant(long id, String plant_name, String plant_type, String plant_health, boolean plant_harvest, String plant_description, Farm farm, Collection<Treatment> treatments) {
        this.id = id;
        this.plant_name = plant_name;
        this.plant_type = plant_type;
        this.plant_health = plant_health;
        this.plant_harvest = plant_harvest;
        this.plant_description = plant_description;
        this.farm = farm;
        this.treatments = treatments;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPlant_name() {
        return plant_name;
    }

    public void setPlant_name(String plant_name) {
        this.plant_name = plant_name;
    }

    public String getPlant_type() {
        return plant_type;
    }

    public void setPlant_type(String plant_type) {
        this.plant_type = plant_type;
    }

    public String getPlant_health() {
        return plant_health;
    }

    public void setPlant_health(String plant_health) {
        this.plant_health = plant_health;
    }

    public boolean isPlant_harvest() {
        return plant_harvest;
    }

    public void setPlant_harvest(boolean plant_harvest) {
        this.plant_harvest = plant_harvest;
    }

    public String getPlant_description() {
        return plant_description;
    }

    public void setPlant_description(String plant_description) {
        this.plant_description = plant_description;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    public Collection<Treatment> getTreatments() {
        return treatments;
    }

    public void setTreatments(Collection<Treatment> treatments) {
        this.treatments = treatments;
    }
}
