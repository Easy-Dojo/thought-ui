import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from "react";
import classNames from 'classnames'

type ButtonSiz = 'lg' | 'sm'
type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    /** Setting Button's disable*/
    disable?: boolean;
    href?: string;
    /** Setting Button's size*/
    size?: ButtonSiz;
    /** Setting Button's type*/
    btnType?: ButtonType;
    children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 *
 The most commonly used button elements on the page, suitable for completing specific interactions
 * ### Reference method
 *
 * ~~~js
 * import { Button } from 'thought-ui'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
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
