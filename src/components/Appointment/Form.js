import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

// user inputs information, can save and edit
export default function Form(props) {
  // student:String
  // interviewers:Array
  // interviewer:Number
  // onSave:Function - pass state (student, interviewer) as args to this callback
  // onCancel:Function
  const {interviewers, onSave, onCancel} = props;

  // student:String - text input field as student's name
  // setStudent:Function
  const [student, setStudent] = useState(props.student || "");
  // interviewer:Number - interviewer's id
  // setInterviewer:Function
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function() {
    setStudent("");
    setInterviewer("");
  }
  const cancel = function() {
    reset();
    onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        {/* prevent 'enter' from submitting form */}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList 
          interviewers={interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={onSave} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}