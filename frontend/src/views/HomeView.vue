<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia' // 👈 반응성 유지를 위해
import { useJobStore } from '../stores/jobStore' // 👈 Store 임포트
import PostingCard from '../components/PostingCard.vue'

// Store 사용
const jobStore = useJobStore()

// State (반응성 유지)
const { jobs, loading } = storeToRefs(jobStore)

// Actions
const { fetchJobs, deleteJob } = jobStore

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
  fetchJobs()
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-white">모집 공고</h1>
    
    <div class="flex flex-wrap gap-4 mb-8 p-4 bg-neutral-800 rounded-lg">
       <button class="px-4 py-2 bg-neutral-700 text-gray-200 rounded-md hover:bg-neutral-600 transition-colors">
        마감일순
      </button>
      <input
        type="text"
        placeholder="검색..."
        class="flex-grow px-4 py-2 border border-neutral-700 bg-neutral-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
      />
    </div>

    <div v-if="loading" class="text-center py-10">
      <p class="text-xl">데이터를 불러오는 중입니다...</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostingCard
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        @delete-job="deleteJob" />
    </div>
  </div>
</template>