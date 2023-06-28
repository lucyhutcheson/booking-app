import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Booking from './pages/Booking';
import './App.css';
import './assets/styles.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
