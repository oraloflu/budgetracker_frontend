
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Landing from './pages/Landing';
import Error from './pages/Error';
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
