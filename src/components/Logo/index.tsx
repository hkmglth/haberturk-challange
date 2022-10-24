import React from 'react'
import LogoDark from './LogoDark'
import LogoLight from './LogoLight'

export type ILogoProps = {
    className?:string,
    onClick?:() => any
}
type ILogoThemeProps = {
    theme: 'dark'|'light'
}

const Logo = ({className, theme, onClick}: ILogoProps & ILogoThemeProps ) => {
  return (
    <>
        {
            theme === 'dark'
            ?
                <LogoDark onClick={onClick} className={className} />
            : theme === 'light'
            &&
                <LogoLight onClick={onClick} className={className} />
        }
    </>
  )
}

export default Logo