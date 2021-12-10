import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import Appointment from "./Appointment";
import DayList from "./DayList";
import appointments from "./appointmentData" // mock data

export default function Application(props) {
  const [day, setDay ] = useState('Monday');
  const [days, setDays] = useState([]);
  
  useEffect(() => {
    const baseUrl = 'http://localhost:8001';
    axios
      .get(`${baseUrl}/api/days`)
      .then((response) => {
        setDays([...response.data])
      })
  }, []);

  const parsedAppts = appointments.map(a =>
    <Appointment key={a.id} {...a} />
  );

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={days}
          value={day}
          onChange={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements during the "The Scheduler" activity. */}
        {parsedAppts}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
