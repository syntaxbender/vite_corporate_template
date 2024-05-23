import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store.js'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <ParallaxProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ParallaxProvider>
  </React.StrictMode>
)
