import React from 'react';

// allows user to see existing appointment
export default function Show(props) {
  // student:String - eg. "Lydia Miller-Jones"
  // interviewer:Object - i.e. story: array of objs
  // onEdit:Function - called when user clicks Edit button
  // onDelete:Function - called when user clicks Delete button
  const {student, interviewer, onEdit, onDelete} = props;

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{interviewer.name}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={onDelete}
          />
        </section>
      </section>
    </main>
  );
}