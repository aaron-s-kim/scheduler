import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
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
      setState(prev => ({...prev, 
        days: all[0].data, appointments: all[1].data, interviewers: all[2].data
      }));
    });
  }, []);

  const daysOfWeek = {Monday:0, Tuesday:1, Wednesday:2, Thursday:3, Friday:4};
  const dayIndex = daysOfWeek[state.day];
  const days = [...state.days]; // clone state.days => [0:{id, name, appt, int, spots}, 1:{}, ...]
  
  const bookInterview = (id, interview) => {
    const appointment = { // => {id, time, interview:{}/null}
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = { // updates appt list with new appt
      ...state.appointments,
      [id]: appointment
    };

    if (!state.appointments[id].interview) { // if empty/null, decrement spots on booking
      days[dayIndex].spots--;
    }
    console.log(days[dayIndex].spots);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((res) => setState({ ...state, appointments, days }))
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

    days[dayIndex].spots++; // increase spots on deleting booking

    return axios
      .delete(`/api/appointments/${id}`)
      .then((res) => setState({ ...state, appointments, days}))
  }

  return { state, setDay, bookInterview, cancelInterview };
}