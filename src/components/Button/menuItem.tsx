import React, {FC,useContext} from "react";
import classNames from "classnames";
import {MenuContext} from "../Menu/menu";

export interface MenuItemProps {
    index: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: FC<MenuItemProps> = (props) => {
    const {index, disabled, className, style, children} = props
    const context = useContext(MenuContext)

    const classes = classNames('tui-menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })

    const handleClick = ()=>{
        if (context.onSelect && !disabled) {
            context.onSelect(index)
        }
    }

    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

MenuItem.defaultProps = {}

export default MenuItem