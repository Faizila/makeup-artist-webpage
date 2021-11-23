import './App.css';
import Nav from './Container/Navbar/Navbar';
import Profile from './Container/Home/Profile';
import Portfolio from './Container/Portfolio/Portfolio';
import Contact from './Container/Contact/Contact';
import Aboutme from './Container/Aboutme/Aboutme';
import Services from './Container/Services/Services';


function App() {
  return (
    <div id="main">
      <Nav/>
      <Profile/>
      <Aboutme/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;