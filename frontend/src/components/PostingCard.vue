<script setup lang="ts">
import type { JobPosting } from '../type/types' // 목록 타입 임포트

defineProps<{
  job: JobPosting
}>()

// 삭제 이벤트를 부모(HomeView)로 전달
const emit = defineEmits<{
  (e: 'delete-job', id: number): void
}>()
</script>

<template>
  <div class="bg-neutral-800 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-neutral-700">
    
    <div class="p-5">
      <h3 class="text-xl font-bold mb-2 truncate text-white">{{ job.jobTitle }}</h3>
      
      <p class="text-gray-400 mb-3">{{ job.companyName }}</p>
      
      <p class="text-brand-purple-light font-semibold mb-4">
        마감일: {{ job.dueDate }}
      </p>

      <a 
        :href="job.url" 
        target="_blank"
        class="inline-block w-full text-center bg-brand-purple text-white px-4 py-2 rounded-md font-semibold hover:bg-brand-purple-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-light"
      >
        원본 공고 보기
      </a>
      
      <button 
        @click="emit('delete-job', job.id)"
        class="mt-3 w-full text-center bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
      >
        삭제
      </button>
    </div>
  </div>
</template>