import React from 'react';
import "components/DayListItem.scss";
import classNames from "classnames";

// shows all data for a single day
export default function DayListItem(props) {
  const {name, spots, selected, setDay} = props; // name:Str day, spots:Num spots remaining, selected:Bool day selected, setDay:Func (day name)

  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': selected,
    'day-list__item--full': (!spots),
  });

  const formatSpots = function(spots) {
    return (spots === 0) ? 'no spots remaining' : (spots === 1) ? '1 spot remaining' : `${spots} spots remaining`;
  }

  // represents entire day item
  return (
    <li
      onClick={setDay}
      className={dayClass}
      data-cy="day" // cypress testing
    >
      {/* h2 displays day name */}
      <h2 className="text--regular">{name}</h2> 
      {/* h3 displays spots remaining for a day */}
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}