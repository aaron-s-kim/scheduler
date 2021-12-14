import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

// user inputs information, can save and edit
export default function Form(props) {
  // interviewers:ArrOfObjs, onSave:Func - callback args (student, interviewer), onCancel:Func
  const {interviewers, onSave, onCancel} = props;
  // student:Str, interviewer:Num - id of interviewer
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  // Clear all fields
  const reset = function() {
    setStudent("");
    setInterviewer(null);
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
          onChange={setInterviewer}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={() => onSave(student, interviewer)} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}