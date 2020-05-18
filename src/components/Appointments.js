import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PickDate from "./Datepicker";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Appointments extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      bookDate: "",
      bookTime: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <Container className="appointments-container">
          <Row>
            <Col>
              <Form
                name="appointmentsForm"
                className="appointments-form"
                onChange={this.handleChange}
                method="POST"
                data-netlify={true}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="appointmentsForm"
                />

                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required name="firstName" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required name="lastName" />
                  </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="email-in-form">Email</Form.Label>
                  <Form.Control required name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Which day are you looking to book?</Form.Label>
                  <PickDate
                    onClick={this.handleChange}
                    name="bookDate"
                    className="datepicker"
                    required
                  ></PickDate>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>
                    Which time slot would you like to book?
                  </Form.Label>
                  <Form.Control
                    required
                    name="bookTime"
                    as="select"
                    placeholder="Select a Time Slot"
                  >
                    <option>11:30am</option>
                    <option>12:00pm</option>
                    <option>1:00pm</option>
                    <option>5:00pm</option>
                    <option>6:00pm</option>
                  </Form.Control>
                </Form.Group>
                <button className="form-button" type="submit">
                  Submit
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Appointments;
