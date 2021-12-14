import React from 'react';

// displays the time for appointment
export default function Header(props) {
  // time:Str
  const {time} = props;

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}