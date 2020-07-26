import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import * as firebase from "firebase";

import "react-datepicker/dist/react-datepicker.css";
// import Axios from "axios";

class PickDate extends React.Component {
  constructor() {
    super();
    this.app = firebase.initializeApp({
      apiKey: "AIzaSyAGDPnJdFSjbIaAndJup2jiPSwto0MfsQY",
      authDomain: "damiron-family-photography.firebaseapp.com",
      databaseURL: "https://damiron-family-photography.firebaseio.com",
      projectId: "damiron-family-photography",
      storageBucket: "damiron-family-photography.appspot.com",
      messagingSenderId: "646823586096",
      appId: "1:646823586096:web:2d54358ad6eeb4bd6380f5",
    });
  }

  state = {
    startDate: "",
    times: "",
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  getSundays = () => {
    const days = [];
    const bookedDays = [];
    const stateTimes = this.state.times;

    for (let i = 0; i < stateTimes.length; i++) {
      bookedDays.push(new Date(stateTimes[i].time));
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
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className="datepick"
          minDate={moment().add(1, "week").toDate()}
          placeholderText="Select a Booking Date"
          name="datepicker"
          showTimeSelect
          dateFormat="Pp"
          isClearable
          timeIntervals={60}
          excludeDates={this.getSundays()}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 13),
            setHours(setMinutes(new Date(), 0), 15),
            setHours(setMinutes(new Date(), 0), 17),
          ]}
        />
      </>
    );
  }
}

export default PickDate;
