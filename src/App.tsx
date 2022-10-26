import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewsProvider } from 'contexts/NewsContext'

import Landing from 'modules/Landing'
import Navbar from 'layouts/Navbar'
import News from 'modules/News'
import NewsDetail from 'modules/NewsDetail'


const App = () => {
    return (
        <NewsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='haberler' element={<Navbar />}>
                        <Route index element={<News />} />
                        <Route path='gundem' element={<News />} />
                        <Route path='ekonomi' element={<News />} />
                        <Route path='spor' element={<News />} />
                        <Route path='magazin' element={<News />} />
                        <Route path='dunya' element={<News />} />
                        <Route path='teknoloji' element={<News />} />
                        <Route path='saglik' element={<News />} />
                        <Route path='haberDetay' element={<NewsDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NewsProvider>
    )
}

export default App