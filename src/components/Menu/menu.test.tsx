import React from "react";
import {cleanup, fireEvent, render, RenderResult, wait} from "@testing-library/react";

import Menu, {MenuProps} from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

jest.mock('../Icon/icon', ()=>{
    return ()=>{
        return <i className="fa" />
    }
})

jest.mock('react-transition-group', () => {
    return {
        CSSTransition: (props: any) => {
            return props.children
        }
    }
})

const defaultMenuProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: "test"
}

const verticalMenuProps: MenuProps = {
    defaultIndex: '0',
    defaultOpenSubMenus: ['3'],
    mode: 'vertical'
}

const createStyleFile = (): HTMLStyleElement => {
    const cssFile: string = `
        .tui-submenu {
            display: none;
        }
        .tui-submenu.menu-opened {
            display: block;
        }
    `
    const style = document.createElement('style');
    style["type"] = 'text/css'
    style.innerHTML = cssFile
    return style
}

const generateMenu = (props: MenuProps) => {
    return <Menu {...props}>
        <MenuItem>
            active
        </MenuItem>
        <MenuItem disabled>
            disabled
        </MenuItem>
        <MenuItem>
            menu 3
        </MenuItem>
        <SubMenu title="dropdown">
            <MenuItem>
                drop1
            </MenuItem>
        </SubMenu>
    </Menu>
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe('test Menu & MenuItem component', () => {

    beforeEach(() => {
        wrapper = render(generateMenu(defaultMenuProps))
        wrapper.container.append(createStyleFile())
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })

    it('should render correct html tags when render Menu given default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('tui-menu test')
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)

        expect(activeElement).toHaveClass('tui-menu-item is-active')
        expect(disabledElement).toHaveClass('tui-menu-item is-disabled')
    })

    it('should change active menu item and call the right callback when click Menu component item', () => {
        const thirdMenuItem = wrapper.getByText('menu 3')
        fireEvent.click(thirdMenuItem)

        expect(thirdMenuItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(defaultMenuProps.onSelect).toHaveBeenCalledWith('2')

        // test click disabled item
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(defaultMenuProps.onSelect).not.toHaveBeenCalledWith('1')
    })

    it('should render vertical mode when render Menu component given mode is vertical', () => {
        cleanup()
        wrapper = render(generateMenu(verticalMenuProps))
        menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })

    it('should show dropdown items when hover on subMenu', async () => {
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText("dropdown")
        fireEvent.mouseEnter(dropdownElement)
        await wait(()=>{
            expect(wrapper.queryByText('drop1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('drop1'))
        expect(defaultMenuProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(dropdownElement)
        await wait(()=>{
            expect(wrapper.queryByText('drop1')).not.toBeVisible()
        })
    })

    it('should show dropdown items when render menu with subMenu given vertical menu', async () => {
        cleanup()
        wrapper = render(generateMenu(verticalMenuProps))
        wrapper.container.append(createStyleFile())

        expect(wrapper.queryByText('drop1')).toBeVisible()
        fireEvent.click(wrapper.getByText('drop1'))
        expect(defaultMenuProps.onSelect).toHaveBeenCalledWith('3-0')
    })

    it('should toggle dropdown items when click subMenu given vertical menu', async () => {
        cleanup()
        wrapper = render(generateMenu(verticalMenuProps))
        wrapper.container.append(createStyleFile())

        expect(wrapper.queryByText('drop1')).toBeVisible()
        const dropdownElement = wrapper.getByText("dropdown")

        fireEvent.click(dropdownElement)
        expect(wrapper.queryByText('drop1')).toBeVisible()

        fireEvent.click(dropdownElement)
        expect(wrapper.queryByText('drop1')).toBeVisible()
    })
})
