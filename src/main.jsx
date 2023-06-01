import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/index.js'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext.jsx'
// import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'


// const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          {/* <MuiThemeProvider theme={theme}> */}
          <App />
          {/* </MuiThemeProvider> */}
        </ThemeProvider>
      </BrowserRouter >
    </Provider>
  </React.StrictMode>,
)
