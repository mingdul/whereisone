<script setup lang="ts">
import { ref } from 'vue'
import type { PostingForm } from '../type/types'

const form = ref<PostingForm>({
  originalLink: '',
  title: '',
  company: '',
  description: '',
  deadline: ''
})

const handleSubmit = () => {
  console.log('폼 데이터:', form.value)
}
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-white">새 공고 등록</h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="link" class="block text-sm font-medium text-gray-300 mb-1">
          원본 공고 링크 (URL)
        </label>
        <input 
          type="url" 
          id="link" 
          v-model="form.originalLink" 
          placeholder="https://..."
          required 
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="title" class="block text-sm font-medium text-gray-300 mb-1">
          제목
        </label>
        <input 
          type="text" 
          id="title" 
          v-model="form.title" 
          required 
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="company" class="block text-sm font-medium text-gray-300 mb-1">
          회사명
        </label>
        <input 
          type="text" 
          id="company" 
          v-model="form.company"
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="deadline" class="block text-sm font-medium text-gray-300 mb-1">
          마감일
        </label>
        <input 
          type="date" 
          id="deadline" 
          v-model="form.deadline"
          class="w-full px-3 py-2 border border-neutral-700 bg-neutral-900 rounded-md shadow-sm text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
        />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-300 mb-1">
          세부 내용
        </label>
        <textarea 
          id="description" 
          v-model="form.description" 
          rows="5"
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