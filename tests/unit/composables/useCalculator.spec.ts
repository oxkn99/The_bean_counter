import { ref } from 'vue'
import { useCalculator } from '../../../src/composables/useCalculator'
import { type Round } from '../../../src/stores/useSettlementStore'
import { describe, it, expect } from 'vitest'

describe('useCalculator', () => {
  it('calculates the total amount', () => {
    const rounds = ref<Round[]>([
      { id: 1, name: 'Round 1', totalAmount: 100, participants: [], discounts: [] },
      { id: 2, name: 'Round 2', totalAmount: 200, participants: [], discounts: [] },
    ])

    const { settlementResult } = useCalculator(rounds)

    // This is a placeholder test, will be updated with real calculation logic
    expect(settlementResult.value).toBe('Total: 300')
  })
})
