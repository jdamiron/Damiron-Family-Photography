import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
// import Booked from "./Booked";

import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

// const bookedDays = {

// }

class PickDate extends React.Component {
  state = {
    startDate: "",
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  postDataHandler = (e) => {
    e.preventDefault();
    const data = {
      date: this.state.startDate,
    };
    Axios.post("https://damiron-family-photography.firebaseio.com/", data).then(
      (response) => {
        console.log(response);
      }
    );
  };

  getSundays = () => {
    const days = [];
    for (let i = 0; i < 1000; i += 7) {
      days.push(moment().day(14 + i)._d);
    }
    for (let i = 0; i < 1000; i += 7) {
      days.push(moment().day(15 + i)._d);
    }
    return days;
  };

  render() {
    return (
      <>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          onSubmit={this.postDataHandler}
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
            setHours(setMinutes(new Date(), 0), 17),
          ]}
        />
      </>
    );
  }
}

export default PickDate;
