import React from 'react'
import LogoDark from './LogoDark'
import LogoLight from './LogoLight'

export type ILogoProps = {
    className?:string
}
type ILogoThemeProps = {
    theme: 'dark'|'light'
}

const Logo = ({className, theme}: ILogoProps & ILogoThemeProps ) => {
  return (
    <>
        {
            theme === 'dark'
            ?
                <LogoDark className={className} />
            : theme === 'light'
            &&
                <LogoLight className={className} />
        }
    </>
  )
}

export default Logo