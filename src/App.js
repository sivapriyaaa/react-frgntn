import React from 'react';
import './style.css';
import NavBar from './Component1';
import BookBuffet from './BookBuffet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewBooking from './ViewBooking';

export default function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<BookBuffet />} />

            <Route path="ViewBooking" element={<ViewBooking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
