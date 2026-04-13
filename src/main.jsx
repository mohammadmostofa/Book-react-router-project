import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './assets/Pages/HomePage/Home'
import ListedBook from './assets/Pages/ListedBook/ListedBook'
import PageToRead from './assets/Pages/PageRead/PageToRead'
import MainLayout from './Component/MainLayout/MainLayout'

const router = createBrowserRouter([

  {
    path:'/',
    element: <MainLayout></MainLayout>,
    
     children:[
       
       {
        index:true, element:<Home></Home>
       },

       {
        path:'/ListedBook',
        element: <ListedBook></ListedBook>
       },
       
     ],

     errorElement:<PageToRead></PageToRead>




  }


])



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} ></RouterProvider>        
  </StrictMode>,
)
