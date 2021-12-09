import React from 'react';

import DayListItem from './DayListItem';

// responsible for rendering a list of <DayListItem> components
export default function DayList(props) {
  // days:Array [ day:{id, name, spots}, ...]
  // day:String currently selected day
  // setDay:Function sets currently selected day and accepts day name
  const {days, day, setDay} = props;

  // const dayData = Object.values({...days});
  const parsedDays = days.map(d =>
    <DayListItem
      key={d.id} name={d.name} spots={d.spots}
      selected={d.name === day}
      setDay={setDay}
    />
  );
  
  return (
    <ul>
      {parsedDays}
    </ul>
  );
}