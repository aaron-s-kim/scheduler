import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import Appointment from "./Appointment";
import DayList from "./DayList";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
// import appointments from "./appointmentData" // mock data

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = (day) => setState({ ...state, day });
  // const setDays = (days) => setState({ ...state, days });
  
  const appointments = getAppointmentsForDay(state, state.day);
  // console.log(appointments); // [{}, {},...]
  const schedule = appointments.map(appt => {
    // console.log(appt); // {id: 1, time: '12pm', interview: {...}}
    const interview = getInterview(state, appt.interview);
    return (
      <Appointment
        key={appt.id}
        id={appt.id}
        time={appt.time}
        interview={interview}
      />
    );
  });
  
  // renders data for everything
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      // console.log('days', all[0].data);
      // console.log('appointments', all[1].data);
      // console.log('interviewers', all[2].data);
      const [days, appointments, interviewers] = [all[0].data, all[1].data, all[2].data];
      
      setState(prev => ({...prev,
        days,
        appointments,
        interviewers
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
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
