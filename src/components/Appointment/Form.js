import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

// user inputs information, can save and edit
export default function Form(props) {
  const {interviewers, onSave, onCancel, name, interviewer} = props; // interviewers:ArrOfObjs, onSave:Func callback args (student, interviewer), onCancel:Func
  const [currentName, setName] = useState(name || ""); // name:Str
  const [currentInterviewer, setInterviewer] = useState(interviewer || null); // interviewer:Num interviewer id
  const [error, setError] = useState("");

  // Clear all fields
  const reset = function() {
    setName("");
    setInterviewer(null);
  }
  const cancel = function() {
    reset();
    onCancel();
  }

  // validate if blank input name input
  const validate = () => {
    if (currentName === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    onSave(currentName, currentInterviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        {/* prevent 'enter' from submitting form */}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={name}
            type="text"
            placeholder="Enter Student Name"
            value={currentName}
            onChange={(event) => setName(event.target.value)}
            data-testid="student-name-input" // for testing
          />
        <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList 
          interviewers={interviewers}
          onChange={setInterviewer}
          value={currentInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}