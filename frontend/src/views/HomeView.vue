<script setup lang="ts">
import { ref } from 'vue'
import PostingCard from '../components/PostingCard.vue'
import type { Posting } from '../type/types'

const postings = ref<Posting[]>([
    { id: 1, title: 'Vue.js 프론트엔드 개발자', company: 'Awesome Tech', deadline: '2025-11-30', imageUrl: 'https://via.placeholder.com/400x180.png?text=Vue+Job' },
    { id: 2, title: 'Spring Boot 백엔드 엔지니어', company: 'Solid Backend', deadline: '2025-11-25', imageUrl: 'https://via.placeholder.com/400x180.png?text=Spring+Job' },
    { id: 3, title: '풀스택 개발자 (Vue + Spring)', company: 'Fullstack Inc.', deadline: '2025-12-05', imageUrl: 'https://via.placeholder.com/400x180.png?text=Fullstack' }
]);
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-white">모집 공고</h1>
    
    <div class="flex flex-wrap gap-4 mb-8 p-4 bg-neutral-800 rounded-lg">
      <button class="px-4 py-2 bg-neutral-700 text-gray-200 rounded-md hover:bg-neutral-600 transition-colors">
        마감일순
      </button>
      <button class="px-4 py-2 bg-neutral-700 text-gray-200 rounded-md hover:bg-neutral-600 transition-colors">
        좋아요순
      </button>
      <input
        type="text"
        placeholder="검색..."
        class="flex-grow px-4 py-2 border border-neutral-700 bg-neutral-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostingCard
        v-for="posting in postings"
        :key="posting.id"
        :posting="posting"
      />
    </div>
  </div>
</template>