import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'antd/dist/reset.css'         // AntD styles
import './App.css'                   // Custom global styles
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ConfigProvider
  theme={{
    token: {
      colorPrimary: '#0F4C75',
      fontFamily: 'Poppins, Montserrat, sans-serif',
    },
  }}
>
  <App />
</ConfigProvider>
  </React.StrictMode>,
)
