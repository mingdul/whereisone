# WhereIsOne (채용 공고 보드)

이 프로젝트는 [Vue.js](https://vuejs.org/) (Frontend)와 [Spring Boot](https://spring.io/projects/spring-boot) (Backend)를 사용하여 구축한 신입/인턴 채용 공고 플랫폼입니다.

## 1. 프로젝트 계기
신입, 인턴 채용 공고를 여러 사이트에서 보다가 정리해주는 사이트가 있으면 좋겠다고 생각이 들어 진행하게 되었습니다.

## 2. 주요 기능

* **공고 등록:** URL, 회사명, 직무, 마감일, 채용 형태(신입/인턴) 등 공고를 직접 입력하여 DB에 저장합니다.
* **카테고리 필터링:** '신입', '인턴', '전체' 카테고리별로 공고를 필터링하여 볼 수 있습니다.
* **마감일 정렬 (Client-side):** Vue.js 단에서 공고 목록을 마감일순으로 정렬합니다.
* **마감 공고 숨기기 (Client-side):** 마감일이 지난 공고는 Vue의 `computed` 속성을 통해 리스트에서 자동으로 필터링되어 숨겨집니다.
* **공고 관리:** 저장한 공고를 삭제하는 등 기본적인 CRUD 기능을 제공합니다.

## 3. 기술 스택

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Spring](https://img.shields.io/badge/Spring-6DB33F?logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

## 4. 프로젝트 구조 (예시)

```bash
.
├── backend/ (Spring Boot)
│   ├── src/main/java/com/example/jobboard/
│   │   ├── domain/           # Entity (Job.java, JobType.java)
│   │   │   ├── Job.java
│   │   │   └── JobType.java
│   │   ├── repository/       # JPA Repository
│   │   │   └── JobRepository.java
│   │   ├── service/          # 비즈니스 로직
│   │   │   └── JobService.java
│   │   └── controller/       # API 엔드포인트
│   │       └── JobController.java
│   └── src/main/resources/
│       └── application.yml   # DB 연결 정보 등
│
└── frontend/ (Vue.js)
    ├── src/
    │   ├── components/       # 공통 컴포넌트 (JobCard.vue, JobForm.vue)
    │   ├── views/            # 메인 페이지 (JobBoard.vue)
    │   ├── App.vue           # 루트 컴포넌트
    │   └── main.js           # Vue 앱 인스턴스 생성
    ├── index.html
    └── package.json