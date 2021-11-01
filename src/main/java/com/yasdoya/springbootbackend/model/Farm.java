package com.yasdoya.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "farms")
@JsonIgnoreProperties({"farmer","plants"})
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "farm_name")
    private String farm_name;

    @Column(name = "farm_type")
    private String farm_type;

    @Column(name = "farm_area")
    private double farm_area;

    @Column(name = "farm_description")
    private String farm_description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User farmer;

    @OneToMany(mappedBy = "farm")
    private List<Plant> plants;

    public Farm(){

    }

    public Farm(long id, String farm_name, String farm_type, double farm_area, String farm_description, User farmer, List<Plant> plants) {
        this.id = id;
        this.farm_name = farm_name;
        this.farm_type = farm_type;
        this.farm_area = farm_area;
        this.farm_description = farm_description;
        this.farmer = farmer;
        this.plants = plants;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFarm_name() {
        return farm_name;
    }

    public void setFarm_name(String farm_name) {
        this.farm_name = farm_name;
    }

    public String getFarm_type() {
        return farm_type;
    }

    public void setFarm_type(String farm_type) {
        this.farm_type = farm_type;
    }

    public double getFarm_area() {
        return farm_area;
    }

    public void setFarm_area(double farm_area) {
        this.farm_area = farm_area;
    }

    public String getFarm_description() {
        return farm_description;
    }

    public void setFarm_description(String farm_description) {
        this.farm_description = farm_description;
    }

    public User getFarmer() {
        return farmer;
    }

    public void setFarmer(User farmer) {
        this.farmer = farmer;
    }

    public List<Plant> getPlants() {
        return plants;
    }

    public void setPlants(List<Plant> plants) {
        this.plants = plants;
    }
}
