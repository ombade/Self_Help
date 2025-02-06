


import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
import Projects from './Pages/feat';
import Footer from './Pages/footer';
import GuidedMeditation from './Pages/GuidedMeditation';
import SpeedDrills from './Pages/SpeedDrills';
import HomePage from './Pages/homepage';
import Box from './Pages/box';
import { AuthProvider } from './Pages/AuthContext'; 
function App() {
  return (
    <AuthProvider> {/* Wrap the entire application with AuthProvider */}
      <Router>
        <div className="App"> 
          <Navbar />
          <Home />
          <HomePage />
         <GuidedMeditation />
          <Contact />
          <About />
          <Box />
          <SpeedDrills />
          
           {/* <Footer /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
