// 1. find object in state.days array where name matches provided day. 
//  then access that specific days appointment array.
// 2. Once we access appointment array for given day, iterate through it
//  if id matches id of states.appointments, return that value.
// 3. Validation: If no appointments on given day, days data will be empty.
//  According to tests, should return an empty array.

export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const filteredDays = state.days.filter(d => d.name === day);
  const apptsForDay = (filteredDays.length) ? filteredDays[0].appointments : [];
  const arrApptObjs = apptsForDay.map(id => {
    return state.appointments[id];
  });
  // console.log('0_state.days', state.days);
  // console.log('1_filteredDays', filteredDays);
  // console.log('2_apptsForDay', apptsForDay);
  // console.log('3_arrApptObjs', arrApptObjs);

  return arrApptObjs;
}

// return an object that contains the interview data if it is passed an object that contains an interviewer.
export function getInterview(state, interview) {
  if (!interview) return null;

  const id = interview.interviewer;
  interview.interviewer = { ...state.interviewers[id] }
  return interview;
}
