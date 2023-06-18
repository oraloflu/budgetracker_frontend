import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Landing from './pages/Landing';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Error from './pages/Error';
// import Header from './components/Header';
import { SharedLayout, Stats, Transaction, Settings } from './pages/dashboard';
function App(): JSX.Element {
  return (
    <>
      {/*       <Header />
       */}{' '}
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
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
