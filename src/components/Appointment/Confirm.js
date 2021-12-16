import React from 'react';
import Button from 'components/Button';

// allows user to confirm delete action
export default function Confirm(props) {
  const {message, onConfirm, onCancel} = props; // message:Str, onConfirm:Func, onCancel:Func

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