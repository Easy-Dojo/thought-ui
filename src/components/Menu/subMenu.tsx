import React, {FC, useContext, useState} from "react"
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menuItem";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../transition";

export interface SubMenuProps {
    index?: string;
    title?: string;
    className?: string;
}

const SubMenu: FC<SubMenuProps> = (props) => {
    const {index, title, className, children} = props
    const context = useContext(MenuContext)
    const openSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpen = (index && context.mode === "vertical")
        ? openSubMenus.includes(index)
        : false
    const [open, setOpen] = useState(isOpen)
    const classes = classNames('tui-menu-item tui-submenu-item', className, {
        'is-active': context.index === index,
        'is-vertical': context.mode === 'vertical',
        'is-opened': open,
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!open)
    }

    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }

    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
        },
        onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
        }
    } : {}

    const renderChildren = () => {
        const subMenuClasses = classNames('tui-submenu', {
            'menu-opened': open
        })
        const childrenComponent = React.Children.map(children, ((child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component")
            }
        }))
        return <Transition
            in={open}
            timeout={300}
            animation="zoom-in-top"
        >
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        </Transition>

    }

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon="angle-down" className="arrow-icon" />
            </div>
            {renderChildren()}
        </li>
    )
};

SubMenu.displayName = 'SubMenu'

export default SubMenu
