// 1. start by finding object in state.days array where name matches provided day. 
//  With this info we can access that specific days appointment array.
// 2. Once we access the appointment array for given day, need to iterate through it
//  comparing where it's id matches id of states.appointments and return that value.
// 3. We should also probably do a bit of validation. If there are no appointments on the given day, our days data will be empty. According to our tests, in a case like this, we should return an empty array.

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