import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class PickDate extends React.Component {
  state = {
    startDate: "",
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        className="datepick"
        minDate={moment().add(1, "week").toDate()}
        placeholderText="Select an Appointment Date"
        name="datepicker"
      />
    );
  }
}

export default PickDate;
