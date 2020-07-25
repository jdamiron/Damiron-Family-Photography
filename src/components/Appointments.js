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
      fullName: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearForm = (e) => {
    this.setState({
      fullName: "",
      email: "",
    });
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
                onSubmit={this.clearForm}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="appointmentsForm"
                />

                <Row>
                  <Col>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control required name="fullName" />
                  </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="email-in-form">Email</Form.Label>
                  <Form.Control required name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label className="appointment-label">
                    When would you like to book?
                  </Form.Label>
                  <PickDate
                    onClick={this.handleChange}
                    name="bookDate"
                    className="datepicker"
                    required
                  ></PickDate>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Photosession Type</Form.Label>
                  <Form.Control as="select" required name="photoStyle">
                    <option>Maternity (Please book 3 weeks in advance)</option>
                    <option>Newborn</option>
                    <option>Cake Smash</option>
                    <option>Milestone</option>
                  </Form.Control>
                </Form.Group>
                <button className="form-button" type="submit">
                  SUBMIT
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
