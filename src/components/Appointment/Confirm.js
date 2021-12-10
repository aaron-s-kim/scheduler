import React from 'react';
import Button from 'components/Button';

// allows user to confirm destructive action
export default function Confirm(props) {
  // message:String - eg. "Delete the appointment?"
  // onConfirm:Function - called when user clicks Confirm button
  // onCancel:Function - called when user clicks Cancel button
  const {message, onConfirm, onCancel} = props;

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button onClick={onCancel} danger>Cancel</Button>
        <Button onClick={onConfirm} danger>Confirm</Button>
      </section>
    </main>
  );
}