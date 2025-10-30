<template>
  <div class="round-input-form">
    <h2 class="form-title">새로운 장소 추가</h2>
    <div class="input-group">
      <input v-model="name" placeholder="장소 이름 (예: 1차: 술주유)" class="text-input" />
      <input v-model.number="totalAmount" type="number" placeholder="총 금액" class="number-input" />
      <button @click="addRound" class="add-button">추가</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSettlementStore } from '../stores/useSettlementStore'

const store = useSettlementStore()
const name = ref('')
const totalAmount = ref<number | null>(null)

const addRound = () => {
  if (name.value && totalAmount.value !== null) {
    store.addRound(name.value, totalAmount.value)
    name.value = ''
    totalAmount.value = null
  }
}
</script>

<style scoped>
.round-input-form {
  padding: 1rem;
  background-color: #f3f4f6; /* bg-gray-100 */
  border-radius: 0.5rem;
}

.form-title {
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 600px) {
  .input-group {
    flex-direction: column;
  }
  .number-input {
    width: 100%; /* Full width on small screens */
  }
}

.text-input,
.number-input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db; /* border */
  border-radius: 0.25rem;
  font-size: 1rem;
}

.number-input {
  width: 8rem; /* Adjust as needed */
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6; /* bg-blue-500 */
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: #2563eb; /* darker blue on hover */
}
</style>
