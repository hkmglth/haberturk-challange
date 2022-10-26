import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './newsDetail.css'

import { INewsItemProps } from 'Models/News'
import { useNews } from 'hooks'

import NewsDetailList from 'components/NewsDetailList'

const NewsDetail = () => {
    const location = useLocation()
    const currentNews:INewsItemProps = location.state
    const { news } = useNews()

    return (
        // <div className='news-detail-wrapper'>
        //     <div className='news-detail-list-wrapper'>
        //         {
        //             news.map( (news) => <NewsDetailList news={news} /> )
        //         }
        //     </div>
        //     <div className='news-detail'>
        //         <p className='news-detail-header'>
        //             {currentNews.header}
        //         </p>
        //         <p className='news-detail-desc'>
        //             {currentNews.desc}
        //         </p>
        //         <img className='news-detail-img' src={require('../../assets/img/16.png')} alt="" />
        //         <p className='news-detail-detail'>
        //             {currentNews.detail}
        //         </p>
        //     </div>
        // </div>
        <>
        haber detay
            {
                ` id: ${currentNews.id}`
            }
        </>
    )
}

export default NewsDetail