import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
const Home = lazy(() => import("./Home"));
const Settings = lazy(() => import("./Settings"));
const AboutUs = lazy(() => import("./AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const Store = lazy(() => import("./Store"));
const TourDates = lazy(() => import("./TourDates"));
const ShoppingCart = lazy(() => import("./ShoppingCart"));
const MainPage = lazy(() => import("./MainPage"));
const App: React.FC = () => {
  return (
    <Router>
      <HamburgerMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/tourdates" element={<TourDates />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default App;
