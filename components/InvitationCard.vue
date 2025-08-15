<template>
  <div
    class="max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8 ring-1 ring-rose-200 transform transition duration-300 hover:scale-105"
  >
    <h1 class="text-5xl font-script text-rose-600 mb-2 text-center">
      {{ couple }}
    </h1>
    <div class="flex justify-center mb-4">
      <span class="text-rose-300 text-2xl">❤︎ ❤︎ ❤︎</span>
    </div>
    <p class="mb-2 text-center text-gray-700">
      You are cordially invited to the wedding celebration.
    </p>
    <p class="text-sm text-gray-500 text-center italic">
      {{ date }} at {{ venue }}
    </p>
  </div>
</template>

<script setup lang="ts">
const couple = "Alex & Sam";
const date = "June 15, 2025";
const venue = "Sunset Gardens, Springfield";
</script>
