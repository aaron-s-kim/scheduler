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

  const updateSpots = (state, appointments, id) => {
    const days = state.days.map(day => {return {...day}}); // clone state.days => [0:{id, name, appt, int, spots}, 1:{}, ...]

    const daysOfWeek = {Monday:0, Tuesday:1, Wednesday:2, Thursday:3, Friday:4};
    const dayIndex = daysOfWeek[state.day];

    // determines if null or exists
    const prevState = state.appointments[id].interview;
    const newState = appointments[id].interview;
    if (!prevState && newState) { // create
      days[dayIndex].spots--;
    }
    if (prevState && !newState) { // delete
      days[dayIndex].spots++;
    }

    return days;
  }

  const bookInterview = (id, interview) => {
    const appointment = { ...state.appointments[id], interview: { ...interview } }; // => {id, time, interview:{}/null}
    const appointments = { ...state.appointments, [id]: appointment }; // updates appt list with new appt

    const days = updateSpots(state, appointments, id);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((res) => setState({ ...state, appointments, days }))
  }

  const cancelInterview = (id) => {
    const appointment = { ...state.appointments[id], interview: null };
    const appointments = { ...state.appointments, [id]: appointment };

    const days = updateSpots(state, appointments, id);

    return axios
      .delete(`/api/appointments/${id}`)
      .then((res) => setState({ ...state, appointments, days}))
  }

  return { state, setDay, bookInterview, cancelInterview };
}