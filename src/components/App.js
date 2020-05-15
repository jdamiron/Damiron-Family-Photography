import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/milkbath.jpg"
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
