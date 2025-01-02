import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Settings = lazy(() => import('./Settings'));
const AboutUs = lazy(() => import('./AboutUs'));
const ContactUs = lazy(() => import('./ContactUs'));
const Store = lazy(() => import('./Store'));
const TourDates = lazy(() => import('./TourDates'));
const ShoppingCart = lazy(() => import('./ShoppingCart'));
const MainPage = lazy(() => import('./MainPage')); // Import MainPage

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Set MainPage as the home page */}
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/tourdates" element={<TourDates />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/mainpage" element={<MainPage />} /> {/* Add MainPage route */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;