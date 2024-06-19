import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import Login from "../user/login/Login";
import Register from "../user/register/Register";
import ClientManagement from "../clientManagement/ClientManagement";
import ServiceManagement from "../serviceManagement/ServiceManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/add-work" element={<AddWork />} />
          <Route path="/update/:id" element={<AddWork />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clients" element={<ClientManagement />} />
          <Route path="/services" element={<ServiceManagement />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
