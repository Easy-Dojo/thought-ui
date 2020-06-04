import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import Button, {ButtonProps} from './button'

const BUTTON_TAG_NAME = 'BUTTON'
const A_TAG_NAME = 'A';

/**
 * 组件单元测试，测什么？
 * 1. 测试能不能保持正常行为，比如Button组件能work as a button，可以添加onClick事件监听等
 * 2. 测试渲染的结果是不是期望的HTML元素：tagName === BUTTON ？
 * 3. 测试样式属性——根据属性值的不同，能不能得到相应的className（样式是否被正确添加）
 * 4. 测试特殊属性的的作用：disable or 改变HTML类型的属性能否达成期望
 */
describe('test button component', ()=>{
  it('should render the default button', ()=>{
    const defaultProps = {
      onClick: jest.fn()
    }
    const wrapper = render(<Button {...defaultProps}>TestBtn</Button>)
    const element = wrapper.getByText('TestBtn') as HTMLButtonElement

    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual(BUTTON_TAG_NAME)
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct HTML tag with correct className when render Button given btnType is Primary, size is Large, additional class is klass', ()=>{
    const testProps: ButtonProps = {
      btnType: 'primary',
      size: 'lg',
      className: 'klass'
    }
    const wrapper = render(<Button {...testProps}>TestBtn</Button>)
    const element = wrapper.getByText('TestBtn') as HTMLButtonElement

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })

  it('should render disabled button when render Button given disabled attribute true', ()=>{
    const disabledProps: ButtonProps = {
      disabled: true,
      onClick: jest.fn(),
    }
    const wrapper = render(<Button {...disabledProps}>TestBtn</Button>)
    const element = wrapper.getByText('TestBtn') as HTMLButtonElement

    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })

  it('should render a link when render Button given btnType is link and href is provided', ()=>{
    const linkProps: ButtonProps = {
      btnType: 'link',
      href: "#"
    }
    const wrapper = render(<Button {...linkProps}>TestBtn</Button>)
    const element = wrapper.getByText('TestBtn')

    expect(element.tagName).toEqual(A_TAG_NAME)
    expect(element).toHaveClass('btn btn-link')
  })


  it('should render a disabled link when render Button given btnType is link and href is provided and disabled attribute true', ()=>{
    const linkProps: ButtonProps = {
      btnType: 'link',
      disable: true,
      href: "#",
    }
    const wrapper = render(<Button {...linkProps}>TestBtn</Button>)
    const element = wrapper.getByText('TestBtn')

    expect(element.tagName).toEqual(A_TAG_NAME)
    expect(element).toHaveClass('btn btn-link disabled')
  })
})
