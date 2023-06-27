import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Booking from './pages/Booking';
import './App.css';
import './assets/styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
    </Routes>
  );
}

export default App;
