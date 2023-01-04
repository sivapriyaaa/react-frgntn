import React from 'react';
import './style.css';
import NavBar from './Component1';
import ErrorPage from "./error-page"
import BookBuffet from './BookBuffet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewBooking from './ViewBooking';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    
    children: [{
      path: "BookBuffet",
      element: <BookBuffet />,
    },
      {
        path: "ViewBooking",
        element: <ViewBooking />,
      },],},
]);

export default function App(props) {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
