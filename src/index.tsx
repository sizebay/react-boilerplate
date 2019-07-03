import React from 'react'
import ReactDOM from 'react-dom'
import Home from './scenes/home'
import './index.css'
import { StoreProvider } from './store/useStore'

ReactDOM.render(
  <>
    <StoreProvider>
      <Home />
    </StoreProvider>
  </>,
  document.getElementById('root')
)
