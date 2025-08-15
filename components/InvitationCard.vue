<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
    <h1 class="text-3xl font-bold mb-4">{{ couple }}</h1>
    <p class="mb-2">You are cordially invited to the wedding celebration.</p>
    <p class="text-sm text-gray-500">{{ date }} at {{ venue }}</p>
  </div>
</template>

<script setup lang="ts">
const couple = 'Alex & Sam'
const date = 'June 15, 2025'
const venue = 'Sunset Gardens, Springfield'
</script>
