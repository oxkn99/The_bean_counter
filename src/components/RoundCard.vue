<template>
  <div class="round-card">
    <div class="card-header">
      <input v-model="roundName" class="round-name-input" />
      <button @click="removeRound" class="remove-button">X</button>
    </div>
    <div class="total-amount-section">
      <span class="total-amount-label">총액:</span>
      <input v-model.number="roundAmount" type="number" class="total-amount-input" />
      <span class="currency-unit">원</span>
    </div>

    <div class="participants-section">
      <h4 class="participants-title">참가자 ({{ round.participants.length }}명)</h4>
      <div class="participants-list">
        <div v-for="participant in round.participants" :key="participant" class="participant-item">
          <ParticipantTag 
            :name="participant" 
            @remove="removeParticipant(participant)" 
          />
          <button @click="openDiscountModal(participant)" class="discount-button">(할인)</button>
        </div>
      </div>
      <div class="add-participant-section">
        <input v-model="newParticipant" @keyup.enter="addParticipant" placeholder="참가자 추가" class="add-participant-input" />
        <button @click="addParticipant" class="add-participant-button">추가</button>
      </div>

      <div class="previous-participants-section">
        <h5 class="previous-participants-title">이전 참가자</h5>
        <div class="previous-participants-list">
          <button 
            v-for="prevParticipant in store.allUniqueParticipants"
            :key="prevParticipant"
            v-if="!round.participants.includes(prevParticipant)"
            @click="store.addParticipant(round.id, prevParticipant)"
            class="previous-participant-button"
          >
            {{ prevParticipant }}
          </button>
        </div>
      </div>
    </div>
    <DiscountModal 
      :visible="isModalVisible" 
      :participantName="selectedParticipant" 
      @apply="applyDiscount" 
      @close="closeDiscountModal" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSettlementStore, type Round } from '../stores/useSettlementStore'
import ParticipantTag from './ParticipantTag.vue'
import DiscountModal from './DiscountModal.vue'

const props = defineProps<{ round: Round }>()

const store = useSettlementStore()
const newParticipant = ref('')
const isModalVisible = ref(false)
const selectedParticipant = ref('')

const roundName = ref(props.round.name)
const roundAmount = ref(props.round.totalAmount)

watch(roundName, (newName) => {
  store.updateRound(props.round.id, { name: newName })
})

watch(roundAmount, (newAmount) => {
  store.updateRound(props.round.id, { totalAmount: newAmount })
})

const removeRound = () => {
  store.removeRound(props.round.id)
}

const addParticipant = () => {
  if (newParticipant.value) {
    store.addParticipant(props.round.id, newParticipant.value)
    newParticipant.value = ''
  }
}

const removeParticipant = (participantName: string) => {
  store.removeParticipant(props.round.id, participantName)
}

const openDiscountModal = (participantName: string) => {
  selectedParticipant.value = participantName
  isModalVisible.value = true
}

const closeDiscountModal = () => {
  isModalVisible.value = false
}

const applyDiscount = (amount: number) => {
  store.applyDiscount(props.round.id, selectedParticipant.value, amount)
  closeDiscountModal()
}

</script>

<style scoped>
.round-card {
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb; /* border */
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  transition: box-shadow 0.2s ease-in-out;
}

.round-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* hover:shadow-md */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.round-name-input {
  font-size: 1.25rem; /* text-xl */
  font-weight: bold;
  border: none;
  padding: 0;
  flex-grow: 1;
}

.round-name-input:focus {
  outline: none;
  box-shadow: none;
}

.remove-button {
  color: #ef4444; /* text-red-500 */
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
}

.remove-button:hover {
  color: #dc2626; /* hover:text-red-700 */
}

.total-amount-section {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.total-amount-label {
  color: #4b5563; /* text-gray-600 */
  margin-right: 0.5rem;
}

.total-amount-input {
  color: #1f2937; /* text-gray-800 */
  font-weight: 600;
  border: none;
  border-bottom: 2px solid #e5e7eb; /* border-b-2 border-gray-200 */
  padding: 0;
  font-size: 1rem;
}

.total-amount-input:focus {
  outline: none;
  border-color: #3b82f6; /* focus:border-blue-500 */
}

.currency-unit {
  color: #4b5563; /* text-gray-600 */
  margin-left: 0.25rem;
}

.participants-section {
  margin-top: 1rem;
}

.participants-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.participants-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.participant-item {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.discount-button {
  margin-left: 0.25rem;
  font-size: 0.75rem; /* text-xs */
  color: #3b82f6; /* text-blue-500 */
  background: none;
  border: none;
  cursor: pointer;
}

.discount-button:hover {
  text-decoration: underline;
}

.add-participant-section {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 600px) {
  .add-participant-section {
    flex-direction: column;
  }
}

.add-participant-input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db; /* border */
  border-radius: 0.25rem;
  font-size: 1rem;
}

.add-participant-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-2 focus:ring-blue-500 */
}

.add-participant-button {
  padding: 0.5rem 1rem;
  background-color: #22c55e; /* bg-green-500 */
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.add-participant-button:hover {
  background-color: #16a34a; /* hover:bg-green-600 */
}

.previous-participants-section {
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.previous-participants-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.previous-participants-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.previous-participant-button {
  background-color: #e0f2f7; /* Light blue background */
  color: #007bff; /* Blue text */
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.previous-participant-button:hover {
  background-color: #007bff;
  color: white;
}
</style>