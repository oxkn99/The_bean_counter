import { mount } from '@vue/test-utils'
import RoundCard from '../../../src/components/RoundCard.vue'
import { describe, it, expect } from 'vitest'

describe('RoundCard.vue', () => {
  it('renders round name', () => {
    const wrapper = mount(RoundCard, {
      props: {
        round: { id: 1, name: 'Test Round', totalAmount: 100, participants: [], discounts: [] }
      }
    })
    expect(wrapper.text()).toContain('Test Round')
  })
})
