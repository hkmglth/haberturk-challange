import React from 'react'
import './button.css'

type IButtonProps = {
    label: string,
    onClick?: () => any,
    variant: 'red' | 'outlined-white',
    className?: string
}

const Button = ({ label, onClick, variant, className }: IButtonProps) => {
    const selected =
    variant === 'red'
    ? 'button-lightRed'
    : variant === 'outlined-white'
        ? 'button-outlined-white'
        : 'button'
    return (
        <button onClick={onClick} className={ className + ' ' + selected }>
            {label}
        </button>
    )
}

export default Button