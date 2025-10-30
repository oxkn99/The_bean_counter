<template>
  <div class="summary-display">
    <h2 class="summary-title">정산 결과</h2>
    <pre class="summary-result">{{ result }}</pre>
    <button @click="copyToClipboard" class="copy-button">클립보드에 복사</button>
    <p v-if="copied" class="copied-message">복사되었습니다!</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ result: string }>()
const copied = ref(false)

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.result).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}
</script>

<style scoped>
.summary-display {
  padding: 1rem;
  background-color: #f3f4f6; /* bg-gray-100 */
  border-radius: 0.5rem;
  margin-top: 1.5rem;
}

.summary-title {
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.summary-result {
  white-space: pre-wrap;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
}

.copy-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6; /* bg-blue-500 */
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  width: auto; /* Default width */
}

.copy-button:hover {
  background-color: #2563eb; /* darker blue on hover */
}

@media (max-width: 600px) {
  .copy-button {
    width: 100%; /* Full width on small screens */
  }
}

.copied-message {
  color: #22c55e; /* text-green-500 */
  margin-top: 0.5rem;
}
</style>