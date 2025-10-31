package com.example.demo.job;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// @Repository: "이 인터페이스는 DB와 통신하는 담당자(Repository)입니다."
@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    // JpaRepository<Job, Long> 를 상속받는 순간,
    // save(), findAll(), deleteById() 같은 기본 DB 명령어들을
    // 우리가 만들지 않아도 Spring이 알아서 다 만들어줍니다!
}