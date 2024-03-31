//import { Stocks } from "./components/Stocks";
import Hero from "./components/Hero";
//import About from "./components/About_us";
//import Home from "./components/Home";
import {  BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Report from "./components/Report";
// import Success from "./components/Success";
import NotFound from "./components/NotFound";
// import  ContactUs  from "./components/ContactUs";
import Services from "./components/Services";
// import Maps from "./components/Maps";
import Profile from "./components/Profile";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Response from "./components/Response";
//import Logout from "./components/Logout";




const App = () => {

    return (
        <>
     
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Hero />} />

          
          {/* <Route exact path="/contact" element={<ContactUs/>}/> */}
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/register" element={<Signup/>} />
          <Route exact path="/appointment" element={<Appointment/>} />
         

          {/* <Route exact path="/profile" element={<Profile />} />                   
          {/* <Route exact path="/logout" element={<Logout />} /> */}
          <Route exact path="/services" element={<Services/>} />

          <Route exact path="/profile" element={<Profile />} />
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