<template>
  <div class="participant-tag">
    <span>{{ name }}</span>
    <button @click="$emit('remove')" class="remove-participant-button">x</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
defineEmits(['remove'])
</script>

<style scoped>
.participant-tag {
  display: flex;
  align-items: center;
  background-color: #e5e7eb; /* bg-gray-200 */
  border-radius: 9999px; /* rounded-full */
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #4b5563; /* text-gray-700 */
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.remove-participant-button {
  margin-left: 0.5rem;
  color: #6b7280; /* text-gray-500 */
  background: none;
  border: none;
  cursor: pointer;
}

.remove-participant-button:hover {
  color: #374151; /* hover:text-gray-700 */
}
</style>
