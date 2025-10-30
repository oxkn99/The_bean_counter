<template>
  <div id="app" class="app-container">
    <h1 class="app-title">N빵요정</h1>
    <div class="main-content">
      <AboutSection /> <!-- Add AboutSection here -->
      <RoundInputForm />
      <div class="round-cards-container">
        <RoundCard v-for="round in store.rounds" :key="round.id" :round="round" />
      </div>
      <SummaryDisplay v-if="store.rounds.length > 0" :result="settlementResult" />
    </div>
  </div>
</template>

<script setup lang="ts">
import './assets/main.css' // Explicitly import main.css here
import { useSettlementStore } from './stores/useSettlementStore'
import { useCalculator } from './composables/useCalculator'
import RoundInputForm from './components/RoundInputForm.vue'
import RoundCard from './components/RoundCard.vue'
import SummaryDisplay from './components/SummaryDisplay.vue'
import AboutSection from './components/AboutSection.vue' // Import AboutSection
import { toRef } from 'vue'

const store = useSettlementStore()
const { settlementResult } = useCalculator(toRef(store, 'rounds'))

</script>

<style>
/* Global styles can be added here or in main.css */
.app-container {
  padding: 1rem;
  background-color: #f8f8f8;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .app-container {
    padding: 2rem;
  }
}

.app-title {
  font-size: 1.875rem; /* 3xl */
  font-weight: bold;
  margin-bottom: 1.5rem; /* mb-6 */
  text-align: center;
}

.main-content {
  max-width: 48rem; /* max-w-4xl */
  margin-left: auto;
  margin-right: auto;
}

.round-cards-container {
  margin-top: 1.5rem; /* mt-6 */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
}
</style>