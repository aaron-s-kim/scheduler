import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import Appointment from "./Appointment";
import DayList from "./DayList";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";
// import appointments from "./appointmentData" // mock data

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = (day) => setState({ ...state, day });

  // renders data for everything
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      const [days, appointments, interviewers] = [all[0].data, all[1].data, all[2].data];
      
      setState(prev => ({...prev,
        days,
        appointments,
        interviewers
      }));
    });
  }, []);
  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((res) => setState({ ...state, appointments }))
      // .catch((err) => console.log(err));
  }

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return axios
      .delete(`/api/appointments/${id}`)
      .then((res) => setState({ ...state, appointments }))
      // .catch((err) => console.log(err));
  }

  const appointments = getAppointmentsForDay(state, state.day); // => [{}, {},...]
  const interviewers = getInterviewersForDay(state, state.day); // => [{}, {},...]
  const schedule = appointments.map(appt => { // appt => {id: 1, time: '12pm', interview: {...}}
    const interview = getInterview(state, appt.interview);
    return (
      <Appointment
        key={appt.id} id={appt.id} time={appt.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });


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
