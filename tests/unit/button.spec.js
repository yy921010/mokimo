import { mount } from '@vue/test-utils'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { destroyVM } from './utils'

describe('button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('button init has mok-button', () => {
    vm = mount(Button)
    expect(vm.classes()).toContain('mok-button')
  })

  it('button has prop primary by settting type === primary', () => {
    vm = mount(Button, {
      propsData: {
        type: 'primary'
      }
    })
    expect(vm.props('type')).toBe('primary')
  })

  it('button slot test === testDemo', () => {
    vm = mount(Button, {
      slots: {
        default: 'testDemo'
      }
    })
    expect(vm.find('span').text()).toBe('testDemo')
  })

  it('button has mok-button--primary class', () => {
    vm = mount(Button, {
      propsData: {
        type: 'primary'
      }
    })
    expect(vm.classes()).toContain('mok-button--primary')
  })

  it('button has is-disable class', () => {
    vm = mount(Button, {
      propsData: {
        disable: true
      }
    })
    expect(vm.classes()).toContain('is-disable')
  })

  it('button icon', () => {
    vm = mount(Button, {
      parentComponent: Icon,
      propsData: {
        iconName: 'name'
      }
    })
    expect(vm.find('svg')).toBe(true)
  })
})
