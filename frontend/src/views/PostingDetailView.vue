<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { PostingDetail } from '../type/types'

const route = useRoute()
const postingId = ref(route.params.id as string)
const postingDetail = ref<PostingDetail | null>(null)

onMounted(() => {
  postingDetail.value = {
    id: parseInt(postingId.value),
    title: `ID ${postingId.value}번 공고 상세 페이지`,
    company: '상세 페이지에 표시될 회사명',
    description: '여기는 DB에서 가져온 \n 아주 긴 세부 내용이 들어갈 자리입니다.\n 백엔드에서 받은 텍스트의 줄바꿈도 표시됩니다.',
    originalLink: 'https://www.google.com',
    imageUrl: 'https://via.placeholder.com/800x300.png?text=Detail+Banner',
    deadline: '2025-12-31'
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div v-if="postingDetail">
      <a 
        :href="postingDetail.originalLink" 
        target="_blank" 
        class="inline-block py-3 px-6 bg-brand-purple text-white font-bold rounded-lg shadow-md hover:bg-brand-purple-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-light"
      >
        원본 공고 보러가기
      </a>
    </div>
    
    </div>
</template>