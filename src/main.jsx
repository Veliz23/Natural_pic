import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from "react-router-dom"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LikeContextProvider from './context/LikeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LikeContextProvider>  
        <App />
      </LikeContextProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)
