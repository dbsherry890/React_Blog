import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Calendar from "react-widgets/Calendar";

import DatePick from "./Datepicker";
import useFetch from "./useFetch";

import Card from "./Card";

export default function Schedule() {
  const {
    error,
    isPending,
    data: products,
  } = useFetch("http://localhost:8000/products");
  return (
    <div>
      <DatePick />
      <Card products={products} />
    </div>
  );
}
