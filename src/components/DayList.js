import React from 'react';

import DayListItem from './DayListItem';

// responsible for rendering a list of <DayListItem> components
export default function DayList(props) {
  // days:Arr [ day:{id:Num, name:Str, appts:ArrOfNums, spots:Num}, ...]
  // value:Str - selected day
  // onChange:Func sets selected day and accepts day name
  const {days, value, onChange} = props;

  // const dayData = Object.values({...days});
  const parsedDays = days.map(d =>
    <DayListItem
      key={d.id} name={d.name} spots={d.spots}
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