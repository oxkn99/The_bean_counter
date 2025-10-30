import { mount } from '@vue/test-utils'
import SummaryDisplay from '../../../src/components/SummaryDisplay.vue'
import { describe, it, expect } from 'vitest'

describe('SummaryDisplay.vue', () => {
  it('renders settlement result', () => {
    const wrapper = mount(SummaryDisplay, {
      props: {
        result: 'Total: 1000원'
      }
    })
    expect(wrapper.text()).toContain('Total: 1000원')
  })

  it('emits copy event on click', async () => {
    const wrapper = mount(SummaryDisplay, {
      props: {
        result: 'Total: 1000원'
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('copy')
  })
})
