<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { JobForm } from '../type/types'
import { useJobStore } from '../stores/jobStore'

const router = useRouter() // 👈 라우터 인스턴스
const jobStore = useJobStore() // 👈 Store 인스턴스

// Actions
const { createJob } = jobStore

// 폼 데이터는 컴포넌트의 지역 상태(local state)로 둡니다.
const form = ref<JobForm>({
  companyName: '',
  jobTitle: '',
  url: '',
  dueDate: '',
  description: '',
  jobType: '신입'
})

// handleSubmit은 Store의 createJob 액션을 호출
const handleSubmit = async () => {
  // Store의 액션에 폼 데이터와 라우터 인스턴스를 넘김
  await createJob(form.value, router)
}
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-white">새 공고 등록</h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="url" class="block text-sm font-medium text-gray-300 mb-1">
          원본 공고 링크 (URL)
        </label>
        <input 
          type="url" 
          id="url" 
          v-model="form.url" 
          placeholder="https://"
          required 
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="jobTitle" class="block text-sm font-medium text-gray-300 mb-1">
          제목 (Job Title)
        </label>
        <input 
          type="text" 
          id="jobTitle" 
          v-model="form.jobTitle" 
          required 
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="companyName" class="block text-sm font-medium text-gray-300 mb-1">
          회사명
        </label>
        <input 
          type="text" 
          id="companyName" 
          v-model="form.companyName"
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="dueDate" class="block text-sm font-medium text-gray-300 mb-1">
          마감 일시
        </label>
        <input 
          type="datetime-local" 
          id="dueDate" 
          v-model="form.dueDate"
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="jobType" class="block text-sm font-medium text-gray-300 mb-1">
          직무 유형
        </label>
        <select 
          id="jobType" 
          v-model="form.jobType"
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        >
          <option>신입</option>
          <option>경력</option>
          <option>인턴</option>
          <option>계약직</option>
        </select>
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-300 mb-1">
          상세 내용
        </label>
        <textarea 
          id="description" 
          v-model="form.description" 
          rows="5"
          required
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        ></textarea>
      </div>
      
      <button 
        type="submit"
        class="w-full py-3 px-4 bg-brand-purple text-white font-semibold rounded-md shadow-md hover:bg-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-light transition-colors"
      >
        등록하기
      </button>
    </form>
  </div>
</template>