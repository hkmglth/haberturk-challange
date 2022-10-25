import React, { useRef } from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import SmallNews from 'components/SmallNews'

import { useNavigate } from 'react-router-dom'
import { useDraggable } from "react-use-draggable-scroll"
import './landing.css'
import { useNews } from 'hooks'

const Landing = () => {

    const navigate = useNavigate()
    const newsRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const { events } = useDraggable(newsRef)
    const { news } = useNews()

    const handleNavigate = () => {
        navigate('/haberler')
    }

    return (
        <div className='landing-wrapper'>

            <div className='landing-left'>
                <Logo onClick={() => navigate('/', { replace: true })} className='landing-logo' theme='light' />
                <div className='landing-container'>

                    <div className='landing-sidebar'>
                        <div className='point point-red' />
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
                                <Button variant='red' onClick={handleNavigate} label='Görüntüle' />
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
                    news.map((news) => <SmallNews id={news.id} desc={news.header} />)
                }
            </div>
        </div>
    )
}

export default Landing