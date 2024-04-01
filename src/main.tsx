import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import ErrorPage from './error-page'
import './index.css'
import RentalRequestPage from './pages/RentalRequestPage'
import { SignIn } from './pages/signIn'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/signin',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard',
                element: <RentalRequestPage />,
            },
            {
                path: 'rental-requests',
                element: <RentalRequestPage />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </MantineProvider>
    </React.StrictMode>
)
