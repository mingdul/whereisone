<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useJobStore } from '../stores/jobStore'

const route = useRoute()
const jobStore = useJobStore()

// State
const { currentJob, loadingDetail } = storeToRefs(jobStore)

// Actions
const { fetchJobById } = jobStore

onMounted(() => {
  // URL 파라미터에서 ID를 가져와 Store의 액션 호출
  fetchJobById(route.params.id as string)
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div v-if="loadingDetail" class="text-center py-10">
      <p class="text-xl">데이터를 불러오는 중입니다...</p>
    </div>

    <div v-else-if="currentJob">
      <h1 class="text-4xl font-bold mb-2 text-white">{{ currentJob.jobTitle }}</h1>
      <h3 class="text-2xl text-gray-400 mb-6">{{ currentJob.companyName }}</h3>
      
      <div class="bg-neutral-800 p-6 rounded-lg mb-8">
        <p class="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {{ currentJob.description }}
        </p>
      </div>
      
      <a 
        :href="currentJob.url" 
        target="_blank" 
        class="inline-block py-3 px-6 bg-brand-purple text-white font-bold rounded-lg shadow-md hover:bg-brand-purple-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-light"
      >
        원본 공고 보러가기
      </a>
    </div>

    <div v-else>
      <p class="text-center text-red-500 text-xl">공고를 불러오는 데 실패했습니다.</p>
    </div>
  </div>
</template>