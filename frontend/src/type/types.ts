// 1. GET /api/jobs 응답에 사용할 타입
export interface JobPosting {
  id: number;
  companyName: string;
  jobTitle: string;
  url: string;
  dueDate: string;      // "2025-10-31"
  createdAt: string;  // "2025-10-31T15:24:33.589Z"
}

// 2. POST /api/jobs 요청 시 보낼 데이터 타입
// (id와 createdAt은 백엔드가 자동 생성하므로 폼에서는 뺍니다)
export interface JobForm {
  companyName: string;
  jobTitle: string;
  url: string;
  dueDate: string;
}

// 3. GET /api/jobs/{id} (상세) 응답에 사용할 타입 (새로 추가)
/**
 * 기존 JobPosting(목록) 타입의 모든 필드를 상속받고,
 * 추가로 'description' 필드를 가질 것으로 예상되는 타입
 */
export interface JobPostingDetail extends JobPosting {
  description: string;
}