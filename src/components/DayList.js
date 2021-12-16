import React from 'react';

import DayListItem from './DayListItem';

// renders a list of <DayListItem> components
export default function DayList(props) {
  // days:Arr [ day:{id:Num, name:Str, appts:ArrOfNums, spots:Num}, ...]
  const {days, value, onChange} = props; // value:Str selected day, onChange:Func sets selected day

  const parsedDays = days.map(d =>
    <DayListItem
      key={d.id}
      name={d.name}
      spots={d.spots}
      selected={d.name === value}
      setDay={() => onChange(d.name)}
    />
  );
  
  return (
    <ul>
      {parsedDays}
    </ul>
  );
}