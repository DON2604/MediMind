import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Report from "./components/Report";
import NotFound from "./components/NotFound";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Response from "./components/Response";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="*" element={<NotFound />} />
          <Route path="/report" element={<Report />} />
          <Route path="/response" element={<Response />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/Response" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
