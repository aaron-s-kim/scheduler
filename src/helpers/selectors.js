// 1. find object in state.days array where name matches provided day. 
//  then access that specific days appointment array.
// 2. Once we access appointment array for given day, iterate through it
//  if id matches id of states.appointments, return that value.
// 3. Validation: If no appointments on given day, days data will be empty.
//  According to tests, should return an empty array.

// returns array of appointments for day
export function getAppointmentsForDay(state, day) {
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

// returns array of interviewer objects for day (to be sent to Form component)
export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day);
  const interviewersForDay = (filteredDays.length) ? filteredDays[0].interviewers : [];
  const arrInterviewersObjs = interviewersForDay.map(id => {
    return state.interviewers[id];
  });
  return arrInterviewersObjs;
}

// returns object that contains interview data if passed an object that contains an interviewer.
export function getInterview(state, interview) {
  if (!interview) return null;

  const id = interview.interviewer;
  interview.interviewer = { ...state.interviewers[id] }
  return interview;
}

// Zack's code
// export function getInterview(state, interview) {
//   if (state.interviewers && interview) {
//     const result = {
//       "student": interview.student,
//       "interviewer": state.interviewers[interview.interviewer]
//     };
//     return result;
//   }
//   return null;
// };
