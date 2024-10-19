import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import AuthPage from "./Account/AuthPage";
import AuthLoginTailor from "./Home/AuthLoginTailor";
import Registration from './Account/TailorInterface/Registration';
import Dashboard from './Account/TailorInterface/Dashboard';
import PendingOrders from './Account/TailorInterface/PendingOrders';
import CompletedOrders from './Account/TailorInterface/CompletedOrders';
import CancelledOrders from './Account/TailorInterface/CancelledOrders';
import ServicesCustomization from './Account/TailorInterface/ServicesCustomization';
import FAQs from './Account/TailorInterface/FAQs';
import EditProfile from './Account/TailorInterface/EditProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AuthPage />} />
        <Route path="/authlogintailor" element={<AuthLoginTailor />} />
        <Route path="/tailor-registration" element={<Registration />} />
        <Route path="/tailor-dashboard" element={<Dashboard />} />
        <Route path="/pending-orders" element={<PendingOrders />} />
        <Route path="/completed-orders" element={<CompletedOrders />} />
        <Route path="/cancelled-orders" element={<CancelledOrders />} />
        <Route path="/services-customization" element={<ServicesCustomization />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
