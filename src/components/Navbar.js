import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class ReactNavbar extends React.Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">
              <img
                className="header-logo"
                src="./images/DFP - Transparent.png"
                alt="logo"
              ></img>
            </a>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="/"
                    name="home"
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="portfolio"
                    name="portfolio"
                  >
                    Image Gallery
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="contact"
                    name="contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item appointments-nav" id="#appointments">
                  <a
                    className="nav-link js-scroll-trigger appointment-nav"
                    href="appointments"
                    ref={this.myInput}
                    name="appointments"
                  >
                    Book an appointment
                  </a>
                </li>
              </ul>
              <ul className="social-buttons">
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/damironfamilyphotography/"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Navbar id="mobile-menu" collapseOnSelect expand="lg">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <img
              className="header-logo"
              src="./images/DFPMobile.png"
              alt="logo"
            ></img>
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="portfolio">Image Gallery</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
              <Nav.Link href="appointments">Book an Appointment</Nav.Link>
              <Nav.Link href="https://www.instagram.com/damironfamilyphotography/">
                Follow us on Instagram!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default ReactNavbar;
