package com.yasdoya.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "treatments")
@JsonIgnoreProperties({"medicines","plant_treatments","bioTech"})
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "treatment_name")
    private String treatment_name;

    @Column(name = "treatment_method")
    private String treatment_method;

    @Column(name = "treatment_type")
    private String treatment_type;

    @Column(name = "treatment_description")
    private String treatment_description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User bioTech;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "plant_treatments",
            joinColumns = @JoinColumn(name = "treatment_id"),
            inverseJoinColumns = @JoinColumn(name = "plant_id")
    )
    private Collection<Plant> plants;

    @ManyToMany(mappedBy = "treatments")
    private Collection<Medicine> medicines;

    public Treatment(){

    }

    public Treatment(long id, String treatment_name, String treatment_method, String treatment_type, String treatment_description, User bioTech, Collection<Plant> plants, Collection<Medicine> medicines) {
        this.id = id;
        this.treatment_name = treatment_name;
        this.treatment_method = treatment_method;
        this.treatment_type = treatment_type;
        this.treatment_description = treatment_description;
        this.bioTech = bioTech;
        this.plants = plants;
        this.medicines = medicines;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTreatment_name() {
        return treatment_name;
    }

    public void setTreatment_name(String treatment_name) {
        this.treatment_name = treatment_name;
    }

    public String getTreatment_method() {
        return treatment_method;
    }

    public void setTreatment_method(String treatment_method) {
        this.treatment_method = treatment_method;
    }

    public String getTreatment_type() {
        return treatment_type;
    }

    public void setTreatment_type(String treatment_type) {
        this.treatment_type = treatment_type;
    }

    public String getTreatment_description() {
        return treatment_description;
    }

    public void setTreatment_description(String treatment_description) {
        this.treatment_description = treatment_description;
    }

    public User getBioTech() {
        return bioTech;
    }

    public void setBioTech(User bioTech) {
        this.bioTech = bioTech;
    }

    public Collection<Plant> getPlants() {
        return plants;
    }

    public void setPlants(Collection<Plant> plants) {
        this.plants = plants;
    }

    public Collection<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(Collection<Medicine> medicines) {
        this.medicines = medicines;
    }
}
