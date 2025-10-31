package com.example.demo.job; // 1단계에서 만든 job 패키지

import jakarta.persistence.*; // Spring Boot 3.x 버전 기준
import java.time.LocalDate;
import java.time.LocalDateTime;

// @Entity: "이 클래스는 DB 테이블과 연결됩니다."
@Entity
// @Table(name = "job"): "DB에 'job'이라는 이름의 테이블을 만드세요."
@Table(name = "job")
public class Job {

    // @Id: 이 필드가 'Primary Key'(고유 식별자)입니다.
    @Id
    // @GeneratedValue: DB가 알아서 1, 2, 3... 숫자를 자동 생성(auto-increment)합니다.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Column: DB 테이블의 컬럼(열)이 됩니다.
    @Column(nullable = false) // nullable = false: "필수 값" (비어있으면 안 됨)
    private String companyName;

    @Column(nullable = false)
    private String jobTitle;

    @Column(nullable = false)
    private String url;

    private LocalDateTime dueDate; // 마감일

    @Column(columnDefinition = "TEXT") // TEXT: 긴 글을 저장 (varchar(255)보다 큼)
    private String description; // 상세 설명 (추가)

    @Column(length = 50) // varchar(50)
    private String jobType; // 모집 유형 (추가. 예: "신입", "인턴", "계약")

    // @Enumerated: Enum(열거형) 타입을 DB에 저장합니다.

    private LocalDateTime createdAt; // 공고 등록일

    // --- (이 아래는 필수 코드입니다) ---

    // @PrePersist: DB에 처음 저장(INSERT)될 때 자동으로 실행됩니다.
    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now(); // 현재 시간을 자동으로 저장
    }

    // 기본 생성자 (JPA는 기본 생성자가 꼭 필요합니다)
    public Job() {
    }

    // --- (Getter / Setter) ---
    // (Spring이 데이터에 접근하기 위해 꼭 필요합니다)

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }
}