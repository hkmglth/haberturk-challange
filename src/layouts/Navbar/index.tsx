import React, { useEffect, useState } from 'react'
import './navbar.css'

import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie-player'
import MenuLight from 'assets/json/MenuLight.json'
import MenuDark from 'assets/json/MenuDark.json'
import Logo from 'components/Logo'

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [isFirstRun, setIsFirstRun] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {
        setIsFirstRun(false)
      }, [toggle])
      
    return (
        <>
            <div className='flex flex-row'>
                <div onClick={() => setToggle(!toggle) } className={`sidebar ${toggle ? 'sidebar-active' : 'sidebar-disabled' }`}>
                    <Logo onClick={() => navigate('/')} theme='light' className='sidebar-logo' />
                    <div className={`redFlag ${toggle ? 'redFlag-active' : 'redFlag-disabled'}`} />
                    <button onClick={() => setToggle(!toggle)} className='button-toggle button-sidebar'>
                        {
                            toggle
                            ? <Lottie className='w-[64px]' segments={isFirstRun ? [30,30] : toggle ? [0,30] : [0,30]} speed={5} loop={false} play animationData={ MenuLight } />
                            : <Lottie className='w-[64px]' segments={isFirstRun ? [0,0] : toggle ? [30,0] : [30,30]} speed={5} loop={false} play animationData={ MenuDark } />
                        }
                    </button>
                    <div className={`sidebar-content ${toggle ? 'sidebar-content-active' : 'sidebar-content-disabled'}`}>
                        <NavLink to={'/'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Anasayfa
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'gundem'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Gündem
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'ekonomi'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Ekonomi
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'spor'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Spor
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'magazin'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Magazin
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'dunya'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Dünya
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'teknoloji'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Teknoloji
                        </NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to={'saglik'} className={({isActive}) => ( isActive ? 'link link-active' : 'link' )}>
                            Sağlık
                        </NavLink>
                    </div>
                    <div className={`point point-sidebar ${toggle ? 'point-white' : 'point-red' }`} />
                </div>
                <div className='content'>
                    <Outlet />
                </div>
                
            </div>

        </>
    )
}

export default Navbar