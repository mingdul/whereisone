<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useJobStore } from '../stores/jobStore'
import PostingCard from '../components/PostingCard.vue'

const jobStore = useJobStore()

// 👇 'jobs' 대신 'validJobs'를 가져옵니다.
//    이제 'validJobs'는 스토어에서 알아서 마감일 지난 공고를 걸러줍니다.
const { validJobs, loading } = storeToRefs(jobStore)

// 👇 'sortByDueDate' 액션을 가져옵니다.
const { fetchJobs, deleteJob, sortByDueDate } = jobStore

onMounted(() => {
  fetchJobs()
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-white">모집 공고</h1>
    
    <div class="flex flex-wrap gap-4 mb-8 p-4 bg-neutral-800 rounded-lg">
       <button 
         @click="sortByDueDate"
         class="px-4 py-2 bg-neutral-700 text-gray-200 rounded-md hover:bg-neutral-600 transition-colors">
        마감일순
      </button>
      
      </div>

    <div v-if="loading" class="text-center py-10">
      <p class="text-xl">데이터를 불러오는 중입니다...</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostingCard
        v-for="job in validJobs"
        :key="job.id"
        :job="job"
        @delete-job="deleteJob"
      />
    </div>
  </div>
</template>