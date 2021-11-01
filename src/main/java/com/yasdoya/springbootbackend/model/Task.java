package com.yasdoya.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tasks")
@JsonIgnoreProperties({"assignedEmployee"})
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "task_name")
    private String task_name;

    @Column(name = "task_description")
    private String task_description;

    @Column(name = "created_date")
    private Date created_date;

    @Column(name = "scheduled_date")
    private Date scheduled_date;

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

    @Column(name = "task_status")
    private String task_status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User assignedEmployee;

    public Task(){

    }


    public Task(long id, String task_name, String task_description, Date created_date, Date scheduled_date, Date start_date, Date end_date, String task_status, User assignedEmployee) {
        this.id = id;
        this.task_name = task_name;
        this.task_description = task_description;
        this.created_date = created_date;
        this.scheduled_date = scheduled_date;
        this.start_date = start_date;
        this.end_date = end_date;
        this.task_status = task_status;
        this.assignedEmployee = assignedEmployee;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTask_name() {
        return task_name;
    }

    public void setTask_name(String task_name) {
        this.task_name = task_name;
    }

    public String getTask_description() {
        return task_description;
    }

    public void setTask_description(String task_description) {
        this.task_description = task_description;
    }

    public Date getCreated_date() {
        return created_date;
    }

    public void setCreated_date(Date created_date) {
        this.created_date = created_date;
    }

    public Date getScheduled_date() {
        return scheduled_date;
    }

    public void setScheduled_date(Date scheduled_date) {
        this.scheduled_date = scheduled_date;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getTask_status() {
        return task_status;
    }

    public void setTask_status(String task_status) {
        this.task_status = task_status;
    }

    public User getAssignedEmployee() {
        return assignedEmployee;
    }

    public void setAssignedEmployee(User assignedEmployee) {
        this.assignedEmployee = assignedEmployee;
    }
}
