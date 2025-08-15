<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center space-y-8 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200"
  >
    <InvitationCard />
    <WelcomeMessage />
  </div>
</template>

<script setup lang="ts">
import InvitationCard from "~/components/InvitationCard.vue";
import WelcomeMessage from "~/components/WelcomeMessage.vue";
</script>
