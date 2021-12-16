// 1. find obj in state.days array where name matches provided day
// 2. access that days' appointment array, iterate through it
//    if id matches id of states.appointments, return value.
// 3. Validation: If no appointments on given day, days data will be empty.
//    should return empty array.

// returns array of appointments for day
export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day);
  const apptsForDay = (filteredDays.length) ? filteredDays[0].appointments : [];
  const arrApptObjs = apptsForDay.map(id => {
    return state.appointments[id];
  });
  return arrApptObjs;
}

// returns array of interviewer objects for day (to be sent to Form component)
export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day); // => [{id:Num, name:Str, appointments:[], interviewers:[], spots:Num]
  const interviewersForDay = (filteredDays.length) ? filteredDays[0].interviewers : []; // => [Num, ...]
  const arrInterviewersObjs = interviewersForDay.map(id => {
    return state.interviewers[id];
  });
  return arrInterviewersObjs;
}

// returns interview Obj {student:Str, interviewer:{...}} that updates id with corresponding interviewer obj
export function getInterview(state, interview) {
  if (!interview) return null;
  const id = interview.interviewer;
  interview.interviewer = { ...state.interviewers[id] }
  return interview;
}

