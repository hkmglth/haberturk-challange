import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from 'layouts/Navbar'
import Landing from 'modules/Landing'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App