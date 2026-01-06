import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main';
import Home from '../pages/Home';
// import ProductDetails from '../Pages/ProductDetails/ProductDetails'


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            // {
            //     path: "/product/:id",
            //     element: <ProductDetails></ProductDetails>,
                // loader: ({ params }) => fetch(`https://prottayshashop-server-delta.vercel.app/product/${params._id}`),

            // },

        ],
    }
],
)

export default Router;