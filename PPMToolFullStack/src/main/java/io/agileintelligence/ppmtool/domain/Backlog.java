package io.agileintelligence.ppmtool.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PRSequence = 0;
    private String projectIdentifier;


    //OneToOne with project => One project has one backlog
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;
    //OneToMany project tasks => Project task can have one backlog
    private List<ProjectTask> projectTasks = new ArrayList<>();

    public Backlog() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPRSequence() {
        return PRSequence;
    }

    public void setPRSequence(Integer PRSequence) {
        this.PRSequence = PRSequence;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
