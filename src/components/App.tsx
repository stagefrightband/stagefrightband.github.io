import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Store from './Store';
import TourDates from './TourDates';
import ShoppingCart from './ShoppingCart';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tourdates" element={<TourDates />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;