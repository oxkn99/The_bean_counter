import { mount } from '@vue/test-utils'
import DiscountModal from '../../../src/components/DiscountModal.vue'
import { describe, it, expect } from 'vitest'

describe('DiscountModal.vue', () => {
  it('renders when visible', async () => {
    const wrapper = mount(DiscountModal, {
      props: {
        visible: true,
        participantName: 'John Doe'
      }
    })
    expect(wrapper.text()).toContain('Apply Discount for John Doe')
  })

  it('emits apply event with amount', async () => {
    const wrapper = mount(DiscountModal, {
      props: {
        visible: true,
        participantName: 'John Doe'
      }
    })
    await wrapper.find('input').setValue(10)
    await wrapper.find('button.bg-blue-500').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('apply')
    expect(wrapper.emitted().apply[0]).toEqual([10])
  })

  it('emits close event', async () => {
    const wrapper = mount(DiscountModal, {
      props: {
        visible: true,
        participantName: 'John Doe'
      }
    })
    await wrapper.find('button.bg-gray-500').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
