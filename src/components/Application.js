import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import Appointment from "./Appointment";
import DayList from "./DayList";
import { getAppointmentsForDay } from "helpers/selectors";
// import appointments from "./appointmentData" // mock data

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  const setDay = (day) => setState({ ...state, day });
  // const setDays = (days) => setState({ ...state, days });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  console.log('dailyAppointments', dailyAppointments);
  const parsedAppts = dailyAppointments.map(a =>
    <Appointment key={a.id} {...a} />
  );
  
  // renders data for days (nav bar)
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      // axios.get('/api/interviewers')
    ]).then((all) => {
      // console.log(all);
      // console.log('days', all[0].data);
      // console.log('appts', all[1].data);
      // console.log('interviewers', all[2].data);
      // const [first, second] = all;
      // console.log(first, second)

      setState(prev => ({...prev,
        days: all[0].data,
        appointments: all[1].data,
        // interviewers: all[2].data
      }));
    });
  }, []);


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
