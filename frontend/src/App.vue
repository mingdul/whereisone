<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-dark-bg border-b border-neutral-800">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <RouterLink
        to="/"
        class="text-2xl font-bold text-white hover:text-brand-purple transition-colors"
      >
        JobBoard
      </RouterLink>

      <div class="flex items-center gap-x-4">
        <RouterLink
          to="/"
          class="text-gray-300 hover:text-brand-purple font-medium transition-colors"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/create"
          class="bg-brand-purple text-white px-4 py-2 rounded-md font-semibold hover:bg-brand-purple-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-light"
        >
          새 공고 등록
        </RouterLink>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-4 py-8">
    <RouterView />
  </main>
</template>