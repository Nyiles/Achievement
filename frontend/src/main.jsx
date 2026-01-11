import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './layout.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Queries from './Pages/Queries.jsx'
import Achievements from './Pages/Achievements.jsx'
import Plans from './Pages/Plans.jsx'
import Transactions from './Pages/Transactions.jsx'
import Authentication from './Pages/Authentication.jsx'
import { MyContextProvider } from './Global/Global.jsx'


const router = createBrowserRouter([
    {path:"/", element:<Home/>},
  {path:"/transactions", element:<Transactions/>},
    {path:"/queries", element:<Queries/>},
    {path:"/achievements", element:<Achievements/>},
    {path:"/plans",  element:<Plans/>},
    {path:"/authentication", element:<Authentication/>},
])
createRoot(document.getElementById('root')).render(
    <MyContextProvider>
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
    </MyContextProvider>
    
);
