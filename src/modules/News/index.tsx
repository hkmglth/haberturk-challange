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

    const news:INewsItemProps[] = [
        {
            id:1,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:2,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:3,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:4,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:5,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:6,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:7,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:8,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:9,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
        {
            id:10,
            header:'Lorem Ipsum is simply dummy text of the print and typesetting industry.',
            desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
            img:'assets/img/11.png',
            time:'3 saat önce'
        },
    ]

    return (
        <>
            haberler
        </>
    )
}

export default News
