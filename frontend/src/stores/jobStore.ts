import { defineStore } from 'pinia'
import { ref, computed } from 'vue' // 👈 'computed'를 임포트합니다.
import type { JobPosting, JobPostingDetail, JobForm } from '../type/types'
import apiClient from '../api'
import type { Router } from 'vue-router'

export const useJobStore = defineStore('jobs', () => {
  // === 1. State (원본 데이터) ===
  const jobs = ref<JobPosting[]>([]) // 👈 API에서 가져온 '전체' 원본 목록
  const currentJob = ref<JobPostingDetail | null>(null)
  const loading = ref(true)
  const loadingDetail = ref(true)

  // === 2. Getters (계산된 상태) ===

  /**
   * (필터링) 마감일이 오늘이거나 그 이후인 '유효한' 공고 목록
   */
  const validJobs = computed(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // 👈 오늘 날짜의 0시 0분 0초 기준

    return jobs.value.filter(job => {
      const dueDate = new Date(job.dueDate)
      return dueDate >= today // 👈 마감일이 오늘과 같거나 오늘보다 미래인 것만
    })
  })

  // === 3. Actions (로직) ===

  /**
   * (GET) 모든 공고 목록을 불러옵니다.
   */
  async function fetchJobs() {
    loading.value = true
    try {
      const response = await apiClient.get<JobPosting[]>('/jobs')
      jobs.value = response.data // 👈 원본 'jobs' state를 업데이트
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error)
      jobs.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * (정렬) 원본 'jobs' 목록을 마감일 순(오름차순)으로 정렬합니다.
   */
  function sortByDueDate() {
    jobs.value.sort((a, b) => {
      // new Date()로 변환하여 시간순으로 비교
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    })
  }
  
  // ... (fetchJobById, createJob, deleteJob 등 나머지 액션들) ...
  async function fetchJobById(id: string) { /* ... */ }
  async function createJob(form: JobForm, router: Router) { /* ... */ }
  async function deleteJob(id: number) { /* ... */ }


  // === 4. 반환 ===
  return {
    // State
    jobs, // (참고: 이제 컴포넌트는 이 원본 데이터를 직접 쓰지 않습니다)
    currentJob,
    loading,
    loadingDetail,
    
    // Getters 
    validJobs, // 👈 필터링된 목록을 반환

    // Actions
    fetchJobs,
    fetchJobById,
    createJob,
    deleteJob,
    sortByDueDate, // 👈 정렬 액션을 반환
  }
})