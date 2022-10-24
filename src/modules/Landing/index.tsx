import React, { useRef } from 'react'

import useScrollOnDrag from 'react-scroll-ondrag'

import Logo from 'components/Logo'
import Button from 'components/Button'
import SmallNews from 'components/SmallNews'

import { useNavigate } from 'react-router-dom'

import './landing.css'

const Landing = () => {

    const navigate = useNavigate()
    const newsRef = useRef<React.LegacyRef<HTMLDivElement>>(null)
    const { events } = useScrollOnDrag(newsRef);

    
    const handleNavigate = () => {
        navigate('/deneme')
    }

    const news = [
        {
            id:1,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:2,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:3,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:4,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:5,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:6,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:7,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:8,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:9,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
        {
            id:10,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
        },
    ]

    return (
        <div className='landing-wrapper'>
                            
            <div className='landing-left'>
            <Logo className='h-full max-h-[36px] m-4 flex self-start' theme='light' />
                <div className='landing-container'>

                    <div className='landing-sidebar'>
                        <div className='point-red' />
                    </div>

                    <div className='landing-content'>
                        <div>
                            <p className='landing-date'>
                                26.05.2017
                            </p>
                            <p className='landing-header'>
                                Bugün ne oldu?
                            </p>
                            <p className='landing-desc'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text...
                            </p>
                            <p className='landing-route'>
                                <Button onClick={handleNavigate} label='Görüntüle' />
                            </p>
                        </div>
                        <p className='landing-footer'>
                            Copyright © 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
                        </p>
                    </div>
                </div>
            </div>
            <div {...events} ref={newsRef} className='landing-right'>
                <div className='news-overlay' />
                {
                    news.map((news) => <SmallNews id={news.id} desc={news.desc} /> )
                }
            </div>
        </div>
    )
}

export default Landing