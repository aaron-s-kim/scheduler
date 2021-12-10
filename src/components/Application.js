import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import Appointment from "./Appointment";
import DayList from "./DayList";
import appointments from "./appointmentData" // mock data

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // appointments: {} // may put this line, but have to remove/comment hardcoded appts vars
  });
  const setDay = (day) => setState({ ...state, day });
  const setDays = (days) => setState({ ...state, days });
  
  // renders data for days (nav bar)
  useEffect(() => {
    axios
      .get('/api/days')
      .then((response) => {
        setDays(response.data)
      });
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
          days={state.days}
          value={state.day}
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
