import React from 'react';

import "components/DayListItem.scss";
import classNames from "classnames";

// shows all data for a single weekday
export default function DayListItem(props) {
  // name:String day name
  // spots:Number num of spots remaining
  // selected:Boolean t/f declaring that this day is selected
  // setDay:Function accepts name of day
  const {name, spots, selected, setDay} = props;

  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': selected,
    'day-list__item--full': (!spots),
  });

  const formatSpots = function(spots) {
    return (spots === 0) ? 'no spots remaining' : (spots === 1) ? '1 spot remaining' : `${spots} spots remaining`;
  }

  return (
    <li onClick={() => setDay(name)} className={dayClass}>
      {/* li represents entire day item */}

      {/* h2 displays day name */}
      <h2 className="text--regular">{name}</h2> 
      {/* h3 displays spots remaining for a day */}
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}