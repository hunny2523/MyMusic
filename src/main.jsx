import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import store from './Store/index.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>

          <App />

        </ThemeProvider>
      </BrowserRouter >
    </Provider>
  </React.StrictMode>,
)
