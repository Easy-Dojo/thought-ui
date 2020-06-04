import React from "react";
import classNames from 'classnames'

type ButtonSiz = 'lg' | 'sm'
type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    disable?: boolean;
    href?: string;
    size?: ButtonSiz;
    btnType?: ButtonType;
    children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disable,
        size,
        children,
        href,
        ...restProps
    } = props

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disable
    })
    if (btnType === 'link' && href) {
        return <a className={classes} href={href} {...restProps}>{children}</a>
    } else {
        return <button className={classes} disabled={disable} {...restProps}>{children}</button>
    }
}

Button.defaultProps = {
    disable: false,
    btnType: 'default'
}

export default Button
