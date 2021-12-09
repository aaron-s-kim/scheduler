import React from 'react';

// informs user when error occurs
export default function Error(props) {
  // message:String - eg. "Could not delete appointment."
  // onClose:Function - called when user clicks Close button
  const {message, onClose} = props;

  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={onClose}
      />
    </main>
  );
}