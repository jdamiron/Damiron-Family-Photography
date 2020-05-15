import React from "react";

class Navbar extends React.Component {
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
                src="./images/DFP.png"
                alt="logo"
              ></img>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
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
      </>
    );
  }
}

export default Navbar;
