<script setup lang="ts">
import type { Posting } from '../type/types'

defineProps<{
  posting: Posting
}>()
</script>

<template>
  <div class="bg-neutral-800 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-neutral-700">
    
    <img
      :src="posting.imageUrl"
      alt="Posting Image"
      class="w-full h-48 object-cover"
    />

    <div class="p-5">
      <h3 class="text-xl font-bold mb-2 truncate text-white">{{ posting.title }}</h3>
      
      <p class="text-gray-400 mb-3">{{ posting.company }}</p>
      
      <p class="text-brand-purple-light font-semibold mb-4">
        마감일: {{ posting.deadline }}
      </p>

      <RouterLink
        :to="`/posting/${posting.id}`"
        class="inline-block w-full text-center bg-brand-purple text-white px-4 py-2 rounded-md font-semibold hover:bg-brand-purple-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-light"
      >
        자세히 보기
      </RouterLink>
    </div>
  </div>
</template>