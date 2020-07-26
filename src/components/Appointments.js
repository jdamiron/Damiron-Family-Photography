import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DatePicker from "react-datepicker";
import moment from "moment";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import * as firebase from "firebase";
import Booked from "./Booked";

import "react-datepicker/dist/react-datepicker.css";

class Appointments extends React.Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp({
      apiKey: "AIzaSyAGDPnJdFSjbIaAndJup2jiPSwto0MfsQY",
      authDomain: "damiron-family-photography.firebaseapp.com",
      databaseURL: "https://damiron-family-photography.firebaseio.com",
      projectId: "damiron-family-photography",
      storageBucket: "damiron-family-photography.appspot.com",
      messagingSenderId: "646823586096",
      appId: "1:646823586096:web:2d54358ad6eeb4bd6380f5",
    });

    this.state = {
      fullName: "",
      email: "",
      startDate: "",
      times: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  postDataHandler = (e) => {
    e.preventDefault();

    const Data = {
      time: this.state.startDate,
    };

    this.app.firestore().collection("booked").add(Data);

    this.setState({
      fullName: "",
      email: "",
    });
  };

  getBookedDays = () => {
    const days = [];
    const bookedDays = [];
    const stateTimes = this.state.times;

    for (let i = 0; i < stateTimes.length; i++) {
      bookedDays.push(stateTimes[i].time.toDate());
    }

    for (let i = 0; i < 1000; i += 7) {
      days.push(moment().day(14 + i)._d);
    }
    for (let i = 0; i < 1000; i += 7) {
      days.push(moment().day(15 + i)._d);
    }
    const schedule = days.concat(bookedDays);
    return schedule;
  };

  componentDidMount() {
    this.app
      .firestore()
      .collection("booked")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({
          times: newItems,
        });
      });
  }

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
                onSubmit={this.postDataHandler}
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
                  {/* <PickDate
                    onClick={this.handleChange}
                    name="bookDate"
                    className="datepicker"
                    required
                  ></PickDate> */}
                  <DatePicker
                    required
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    className="datepick"
                    minDate={moment().add(1, "week").toDate()}
                    placeholderText="Select a Booking Date"
                    name="datepicker"
                    showTimeSelect
                    dateFormat="Pp"
                    isClearable
                    timeIntervals={60}
                    excludeDates={this.getBookedDays()}
                    includeTimes={[
                      setHours(setMinutes(new Date(), 0), 13),
                      setHours(setMinutes(new Date(), 0), 15),
                      setHours(setMinutes(new Date(), 0), 17),
                    ]}
                  />
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
