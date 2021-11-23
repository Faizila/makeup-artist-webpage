import './App.css';
import Nav from './Container/Navbar/Navbar';
import Profile from './Container/Home/Profile';
import Portfolio from './Container/Portfolio/Portfolio';
import Contact from './Container/Contact/Contact';


function App() {
  return (
    <div id="main">
      <Nav/>
      <Profile/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;