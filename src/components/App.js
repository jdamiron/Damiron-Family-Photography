import React from "react";
import "./App.css";
import ReactNavbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactNavbar />
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/IMG_9399.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <Footer />
      </div>
    );
  }
}

export default App;
