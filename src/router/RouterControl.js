import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AdminPage from "../adminpage/AdminPage";

const RouterControl = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterControl;
