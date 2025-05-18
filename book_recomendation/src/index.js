import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    // static routing
    {
      path:'/',
      element:<Home></Home>
    }
    // {
    //   path:'about-us',
    //   element:<About></About>
    // },
    // {
    //   path:'course',
    //   element:<Course></Course>
    // },
    // {
    //   path:'blog',
    //   element:<Blog></Blog>
    // },
    // // dynamic routing
    // {
    //   path:'blog/:id',
    //   element:<BlogDetails></BlogDetails>
    // },
    // // Error Page
    // {
    //   path:'*',
    //   element:<Error404></Error404>
    // }
  ]
)

root.render(
  <React.StrictMode>
    <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
