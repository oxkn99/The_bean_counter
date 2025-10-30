import { mount } from '@vue/test-utils'
import ParticipantTag from '../../../src/components/ParticipantTag.vue'
import { describe, it, expect } from 'vitest'

describe('ParticipantTag.vue', () => {
  it('renders participant name', () => {
    const wrapper = mount(ParticipantTag, {
      props: {
        name: 'John Doe'
      }
    })
    expect(wrapper.text()).toContain('John Doe')
  })

  it('emits remove event on click', async () => {
    const wrapper = mount(ParticipantTag, {
      props: {
        name: 'John Doe'
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('remove')
  })
})
