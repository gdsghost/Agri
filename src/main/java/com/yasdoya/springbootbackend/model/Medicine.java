package com.yasdoya.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;

@Entity
@Table(name = "medicines")
@JsonIgnoreProperties({"treatments","treatment_medicines"})
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "medicine_name")
    private String medicine_name;

    @Column(name = "medicine_company")
    private String medicine_company;

    @Column(name = "medicine_composition")
    private String medicine_composition;

    @Column(name = "medicine_cost")
    private BigDecimal medicine_cost;

    @Column(name = "medicine_type")
    private String medicine_type;

    @Column(name = "medicine_dose")
    private String medicine_dose;

    @Column(name = "medicine_description")
    private String medicine_description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "treatment_medicines",
            joinColumns = @JoinColumn(name = "medicine_id"),
            inverseJoinColumns = @JoinColumn(name = "treatment_id")
    )
    private Collection<Treatment> treatments;

    public Medicine(){

    }

    public Medicine(long id, String medicine_name, String medicine_company, String medicine_composition, BigDecimal medicine_cost, String medicine_type, String medicine_dose, String medicine_description, Collection<Treatment> treatments) {
        this.id = id;
        this.medicine_name = medicine_name;
        this.medicine_company = medicine_company;
        this.medicine_composition = medicine_composition;
        this.medicine_cost = medicine_cost;
        this.medicine_type = medicine_type;
        this.medicine_dose = medicine_dose;
        this.medicine_description = medicine_description;
        this.treatments = treatments;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMedicine_name() {
        return medicine_name;
    }

    public void setMedicine_name(String medicine_name) {
        this.medicine_name = medicine_name;
    }

    public String getMedicine_company() {
        return medicine_company;
    }

    public void setMedicine_company(String medicine_company) {
        this.medicine_company = medicine_company;
    }

    public String getMedicine_composition() {
        return medicine_composition;
    }

    public void setMedicine_composition(String medicine_composition) {
        this.medicine_composition = medicine_composition;
    }

    public BigDecimal getMedicine_cost() {
        return medicine_cost;
    }

    public void setMedicine_cost(BigDecimal medicine_cost) {
        this.medicine_cost = medicine_cost;
    }

    public String getMedicine_type() {
        return medicine_type;
    }

    public void setMedicine_type(String medicine_type) {
        this.medicine_type = medicine_type;
    }

    public String getMedicine_dose() {
        return medicine_dose;
    }

    public void setMedicine_dose(String medicine_dose) {
        this.medicine_dose = medicine_dose;
    }

    public String getMedicine_description() {
        return medicine_description;
    }

    public void setMedicine_description(String medicine_description) {
        this.medicine_description = medicine_description;
    }

    public Collection<Treatment> getTreatments() {
        return treatments;
    }

    public void setTreatments(Collection<Treatment> treatments) {
        this.treatments = treatments;
    }
}
