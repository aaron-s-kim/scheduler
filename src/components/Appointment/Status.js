import React from 'react';

// informs user operation is in progress
export default function Status(props) {
  const {message} = props; // message:Str

  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{message}</h1>
    </main>
  );
}