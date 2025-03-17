import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './components/common/DarkModeProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <App />
        <ToastContainer />
    </DarkModeProvider>
)
