package com.example.demo.job; // job 패키지

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException; // <-- 상세 조회를 위해 임포트 추가!

import java.util.List;

// @RestController: "이 클래스는 API(JSON)를 반환하는 컨트롤러입니다."
@RestController
// @RequestMapping: "이 컨트롤러의 모든 API는 /api/jobs 라는 공통 주소로 시작합니다."
@RequestMapping("/api/jobs")
public class JobController {

    // 1. DB 담당자(Repository)를 불러옵니다.
    // 'final'로 선언하고, 생성자를 통해 주입받습니다. (이게 표준 방식입니다)
    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // --- 2. 공고 생성 API (Create) ---
    // POST /api/jobs
    @PostMapping
    // @ResponseStatus: "성공하면 201 Created 상태 코드를 응답하세요."
    @ResponseStatus(HttpStatus.CREATED)
    // @RequestBody: "프론트엔드가 보낸 JSON 데이터를 Job 객체로 바꿔주세요."
    public Job createJob(@RequestBody Job job) {
        // jobRepository.save(): 전달받은 job 객체를 DB에 저장(INSERT)합니다.
        // 저장 후, id가 채워진 Job 객체를 반환합니다.
        return jobRepository.save(job);
    }

    // --- 모든 공고 조회 API (Read - PostCard 목록용) ---
    // GET /api/jobs
    @GetMapping
    public List<Job> getAllJobs() {
        // jobRepository.findAll(): DB에 있는 모든 Job을 리스트(List)로 가져옵니다.
        return jobRepository.findAll();
    }

    //Read - Detail 페이지용
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        // jobRepository.findById(): 해당 id의 Job을 찾습니다.
        // .orElseThrow(): 만약 해당 id의 공고가 없으면 "404 Not Found" 에러를 자동으로 발생시킵니다.
        return jobRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Job not found"));
    }

    // --- 4. 공고 삭제 API (Delete) ---
    // DELETE /api/jobs/1  (예: 1번 공고 삭제)
    // {id} 부분은 변수이며, @PathVariable로 값을 가져올 수 있습니다.
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT) // "성공하면 204 No Content 상태 코드를 응답하세요."
    public void deleteJob(@PathVariable Long id) {
        // jobRepository.deleteById(): 해당 id의 데이터를 DB에서 삭제(DELETE)합니다.
        jobRepository.deleteById(id);
    }
}