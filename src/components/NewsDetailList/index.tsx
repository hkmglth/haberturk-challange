import { INewsItemProps } from 'Models/News'
import React from 'react'
import './newsDetailList.css'

const NewsDetailList = ({ news }: { news: INewsItemProps }) => {
    return (
        <div className='news-detail-list-item'>

            <div className='news-list-item-row'>
            <p className='news-list-item-count'>
                { news.id.toString().length === 1 ? `0${news.id}` : news.id }
            </p>
                <img className='news-list-item-img' src={require('../../assets/img/18.png')} alt="" />
                <p className='news-list-item-header'>
                    {news.header}
                    <p className='news-list-item-time'>
                        {news.time}
                    </p>
                </p>
            </div>
        </div>
    )
}

export default NewsDetailList