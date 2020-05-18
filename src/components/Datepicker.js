import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

import "react-datepicker/dist/react-datepicker.css";

class PickDate extends React.Component {
  state = {
    startDate: "",
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    console.log(date);
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
        showTimeSelect
        dateFormat="Pp"
        isClearable
        timeIntervals={60}
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 13),
          setHours(setMinutes(new Date(), 0), 15),
          setHours(setMinutes(new Date(), 0), 17),
        ]}
        action="../db.csv"
      />
    );
  }
}

export default PickDate;
