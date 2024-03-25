import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import React, { useState } from "react";
import "react-widgets/styles.css";
import ReactDOM from "react-dom";

export default function DatePick() {
  const [value, setValue] = useState(new DateObject());
  const today = new DateObject();
  const max_date = new DateObject();
  max_date.setDate(today.getValue() + 14);

  return (
    <DatePicker
      multiple
      value={value}
      onChange={setValue}
      hideYear={true}
      minDate={today}
      maxDate={max_date}
      format="MM/DD/YYYY"
      dateSeparator="; "
      sort
      plugins={[<DatePanel />]}
    />
  );
}
