import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import GlobalStateManagment from './ContextAPI/GlobalStateManagment'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStateManagment>
        <RouterProvider router={router} />
      </GlobalStateManagment>
    </QueryClientProvider>
  </React.StrictMode>,
)
