import { setActivePinia, createPinia } from 'pinia'
import { useSettlementStore } from '../../../src/stores/useSettlementStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('useSettlementStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a round', () => {
    const store = useSettlementStore()
    store.addRound('Test Round', 100)
    expect(store.rounds.length).toBe(1)
    expect(store.rounds[0].name).toBe('Test Round')
    expect(store.rounds[0].totalAmount).toBe(100)
  })

  it('removes a round', () => {
    const store = useSettlementStore()
    store.addRound('Test Round', 100)
    const roundId = store.rounds[0].id
    store.removeRound(roundId)
    expect(store.rounds.length).toBe(0)
  })

  it('adds a participant to a round', () => {
    const store = useSettlementStore()
    store.addRound('Test Round', 100)
    const roundId = store.rounds[0].id
    store.addParticipant(roundId, 'John Doe')
    expect(store.rounds[0].participants.length).toBe(1)
    expect(store.rounds[0].participants[0]).toBe('John Doe')
  })

  it('removes a participant from a round', () => {
    const store = useSettlementStore()
    store.addRound('Test Round', 100)
    const roundId = store.rounds[0].id
    store.addParticipant(roundId, 'John Doe')
    store.removeParticipant(roundId, 'John Doe')
    expect(store.rounds[0].participants.length).toBe(0)
  })

  it('applies a discount', () => {
    const store = useSettlementStore()
    store.addRound('Test Round', 100)
    const roundId = store.rounds[0].id
    store.addParticipant(roundId, 'John Doe')
    store.applyDiscount(roundId, 'John Doe', 10)
    expect(store.rounds[0].discounts.length).toBe(1)
    expect(store.rounds[0].discounts[0].participantName).toBe('John Doe')
    expect(store.rounds[0].discounts[0].amount).toBe(10)
  })
});
