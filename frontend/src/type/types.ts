// 1. GET /api/jobs (목록)
export interface JobPosting {
  id: number;
  companyName: string;
  jobTitle: string;
  url: string;
  dueDate: string;      // "2025-10-31T17:12:19.822Z"
  createdAt: string;
}

// 2. GET /api/jobs/{id} (상세)
export interface JobPostingDetail extends JobPosting {
  description: string; // 👈 상세 설명 추가
  jobType: string;     // 👈 직무 유형 추가
}

// 3. POST /api/jobs (등록 폼)
export interface JobForm {
  companyName: string;
  jobTitle: string;
  url: string;
  dueDate: string;
  description: string; // 👈 상세 설명 추가
  jobType: string;     // 👈 직무 유형 추가
}