import React from "react";
import "components/Application.scss";
import Appointment from "./Appointment";
import DayList from "./DayList";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application() {
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day); // => arrInterviewersObjs
  const appointments = getAppointmentsForDay(state, state.day).map(appt => {
    // appt => {id: 1, time: '12pm', interview: {student:Str, interviewer:Num} or null}
    return (
      <Appointment
        key={appt.id} {...appt}
        interview={getInterview(state, appt.interview)}
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
          {/* List of days */}
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
        {/* List of appointment slots */}
        {appointments}
        <Appointment
          key="last"
          time="5pm"
        />
      </section>
    </main>
  );
}
