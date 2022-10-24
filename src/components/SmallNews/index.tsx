import React from 'react'
import './smallNews.css'

export type ISmallNewsProps = {
    id: number,
    desc: string
}

const SmallNews = ({ id, desc }: ISmallNewsProps) => {

    return (
        <div className='small-news'>
            <p className='small-news-count'>
                {
                    id.toString().length === 1 ? `0${id}` : id
                }
            </p>
            <p className='small-news-desc'>
                {desc}
            </p>
        </div>
    )
}

export default SmallNews