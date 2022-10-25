import React, { useRef } from 'react'
import './news.css'

import { INewsItemProps } from 'Models/News'

import Logo from 'components/Logo'

import { useNavigate } from 'react-router-dom'
import useScrollOnDrag from 'react-scroll-ondrag'
import Button from 'components/Button'

const News = () => {
    const navigate = useNavigate()
    const newsRef = useRef<React.LegacyRef<HTMLDivElement>>(null)
    const { events } = useScrollOnDrag(newsRef)

    const handleNavigate = () => {
        navigate('/haberler')
    }

    return (
        <>
            haberler
        </>
    )
}

export default News
