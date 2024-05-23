import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store.js'
import { StaticRouter } from "react-router-dom/server";
import { ParallaxProvider } from 'react-scroll-parallax'

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, ssrManifest, options) {
  return renderToPipeableStream(
    <React.StrictMode>
      <ParallaxProvider>
        <Provider store={store}>
          <StaticRouter location={url}>
            <AppRouter />
          </StaticRouter>
        </Provider>
      </ParallaxProvider>
    </React.StrictMode>,
    options
  )
}
