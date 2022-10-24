import React from 'react'
import './button.css'

type IButtonProps = {
    label: string,
    onClick?:() => any
}

const Button = ({ label, onClick }: IButtonProps) => {
    return (
        <button onClick={onClick} className='button-lightRed'>
            {label}
        </button>
    )
}

export default Button