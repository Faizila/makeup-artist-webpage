import './Navbar.css';
import pic from '../../Images/nav.jpg';


function Nav() {
  return (
    <div>
    <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={pic} alt="Profile-Pic" className="rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Amber Bava</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://www.facebook.com/GlamByAmberBava" className="facebook" target="blank"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/glambyamberbava/" className="instagram" target="blank"><i className="bx bxl-instagram"></i></a>
        </div>
      </div>
      
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About Me</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Services</span></a></li>
          <li><a href="#gallery" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
    </div>
  );
}

export default Nav;
