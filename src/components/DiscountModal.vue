<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <h3 class="modal-title">할인 적용 대상 {{ participantName }}</h3>
      <div class="discount-input-group">
        <input v-model.number="amount" type="number" placeholder="할인 금액" class="discount-input" />
      </div>
      <div class="modal-actions">
        <button @click="applyDiscount" class="apply-button">적용</button>
        <button @click="$emit('close')" class="cancel-button">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ visible: boolean; participantName: string }>()
const emit = defineEmits(['apply', 'close'])

const amount = ref<number | null>(null)

const applyDiscount = () => {
  if (amount.value !== null) {
    emit('apply', amount.value)
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* bg-gray-600 bg-opacity-50 */
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  width: 90%; /* Use percentage width */
  max-width: 24rem; /* max-w-96 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  border-radius: 0.375rem; /* rounded-md */
  background-color: white;
}

.modal-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  margin-bottom: 1rem;
}

.discount-input-group {
  margin-top: 0.5rem;
}

.discount-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.apply-button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6; /* bg-blue-500 */
  color: white;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
}

.apply-button:hover {
  background-color: #2563eb; /* darker blue on hover */
}

.cancel-button {
  padding: 0.5rem 1rem;
  background-color: #6b7280; /* bg-gray-500 */
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #4b5563; /* darker gray on hover */
}
</style>
