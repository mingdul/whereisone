import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { JobPosting, JobPostingDetail, JobForm } from '../type/types'
import apiClient from '../api'
import type { Router } from 'vue-router' // 👈 라우터 타입을 임포트

// 'jobs'라는 이름으로 store를 정의
export const useJobStore = defineStore('jobs', () => {
  // === 1. State (상태) ===
  const jobs = ref<JobPosting[]>([]) // 목록
  const currentJob = ref<JobPostingDetail | null>(null) // 상세
  
  const loading = ref(true) // 목록 로딩
  const loadingDetail = ref(true) // 상세 로딩

  // === 2. Actions (액션: 로직) ===

  /**
   * (GET) 모든 공고 목록을 불러옵니다. (HomeView)
   */
  async function fetchJobs() {
    loading.value = true
    try {
      const response = await apiClient.get<JobPosting[]>('/jobs')
      jobs.value = response.data
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error)
      jobs.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * (GET) 특정 ID의 공고 상세 정보를 불러옵니다. (PostingDetailView)
   * @param id 공고 ID
   */
  async function fetchJobById(id: string) {
    loadingDetail.value = true
    currentJob.value = null // 이전 데이터를 비움
    try {
      const response = await apiClient.get<JobPostingDetail>(`/jobs/${id}`)
      currentJob.value = response.data
    } catch (error) {
      console.error('상세 데이터를 불러오는 중 오류 발생:', error)
    } finally {
      loadingDetail.value = false
    }
  }

  /**
   * (POST) 새 공고를 등록합니다. (PostingCreateView)
   * @param form 폼 데이터
   * @param router 등록 후 이동할 라우터 인스턴스
   */
  async function createJob(form: JobForm, router: Router) {
    try {
      await apiClient.post('/jobs', form);
      alert('공고가 성공적으로 등록되었습니다.');
      await router.push('/'); // 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error('등록 중 오류 발생:', error);
      alert('공고 등록에 실패했습니다.');
    }
  }

  /**
   * (DELETE) 특정 ID의 공고를 삭제합니다. (HomeView -> PostingCard)
   * @param id 삭제할 공고 ID
   */
  async function deleteJob(id: number) {
    if (!confirm('정말 이 공고를 삭제하시겠습니까?')) {
      return
    }
    try {
      await apiClient.delete(`/jobs/${id}`)
      // 목록 state에서 즉시 제거
      jobs.value = jobs.value.filter(job => job.id !== id)
    } catch (error) {
      console.error('삭제 중 오류 발생:', error)
      alert('삭제에 실패했습니다.')
    }
  }

  // === 3. 반환 ===
  return {
    // State
    jobs,
    currentJob,
    loading,
    loadingDetail,
    // Actions
    fetchJobs,
    fetchJobById,
    createJob,
    deleteJob,
  }
})