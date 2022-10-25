import React from 'react'
import './newsList.css'
import { INewsItemProps } from 'Models/News'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

type INewsListProps = {
    news: INewsItemProps
}

const NewsListItem = ({ news }: INewsListProps) => {

    const navigate = useNavigate()

    return (
        <>
            {
                news.isAd
                ?
                <div className='news-item-wrapper'>
                    <p className='news-item-count'>
                        Reklam
                    </p>
                    <div className='news-item-card'>
                        <img className='news-item-img' src={require('../../assets/img/advert.png')} alt="" />
                    </div>
                </div>
                :
                <div className='news-item-wrapper'>
                    <p className='news-item-count'>
                        {
                            news.id.toString().length === 1
                                ? `0${news.id}`
                                : news.id
                        }
                    </p>
                    <div className='news-item-card'>
                        <p className='news-item-time'> {news.time} </p>
                        <p className='news-item-header'> {news.header} </p>
                        <img className='news-item-img' src={require('../../assets/img/11.png')} alt="" />
                        <p className='news-item-desc'> {news.desc} </p>
                        <Button label='Detay' variant='outlined-white' className='self-start' onClick={() => navigate(`haber?id=${news.id}`)} />
                    </div>
                </div>
            }
        </>
    )
}

export default NewsListItem