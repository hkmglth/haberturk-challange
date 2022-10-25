import React, { useEffect, useRef } from 'react'
import './news.css'
import { useNews } from 'hooks'
import NewsListItem from 'components/NewsListItem'
import { useDraggable } from "react-use-draggable-scroll"

const News = () => {

    const newsRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const { events } = useDraggable(newsRef)
    const { news } = useNews()

    return (
        <>
            <div {...events} ref={newsRef} className='news-list-scroll'>
                <div className='news-daily'>

                    <div className='news-content'>
                        <p className='news-date'>
                            26.05.2017
                        </p>
                        <p className='news-header'>
                            Bugün ne oldu?
                        </p>
                        <p className='news-desc'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <p className='news-footer'>
                        Copyright © 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
                    </p>

                </div>
                <div className='news-list'>
                    {
                        news.map((news) => <NewsListItem news={news} />)
                    }
                </div>
            </div>
        </>
    )
}

export default News
