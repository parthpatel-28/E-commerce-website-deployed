import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './componets/App.jsx'
import "./public/style.css"
import ShopContextProvider from './Context/ShopContext2.jsx'


createRoot(document.getElementById('root')).render(
<ShopContextProvider>
<App/>
</ShopContextProvider>

)
