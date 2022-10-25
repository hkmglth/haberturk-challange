import { NewsContext } from 'contexts/NewsContext'
import React, { useContext } from 'react'

export const useNews = () => useContext(NewsContext)