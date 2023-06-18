import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Landing from './pages/Landing';
import About from './pages/About';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Error from './pages/Error';
import { SharedLayout, Stats, Transactions, Settings } from './pages/dashboard';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <SharedLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Stats />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
