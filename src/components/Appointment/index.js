import React from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss";

export default function Appointment(props) {
  // id:Number, time:String - time of appt (e.g "12pm"), interview:Object - i.e. story: array of objs
    // interview = {
    //   "student": "Lydia Miller-Jones",
    //   "interviewer": { "id": 1, "name": "Sylvia Palmer", "avatar": "https://i.imgur.com/LpaY82x.png" }
    // };
  const {id, time, interview, interviewers, bookInterview, cancelInterview } = props;
  const EMPTY = "EMPTY", SHOW = "SHOW", CREATE = "CREATE", SAVING = "SAVING", DELETING = "DELETING", CONFIRM="CONFIRM";
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => transition(SHOW));
  }

  const remove = () => {
    cancelInterview(id)
      .then(() => transition(EMPTY));
    transition(DELETING);
  }
  
  return (
    <article className="appointment">
      <Header time={time} />
      {/* If interview has value, render Show, else render Empty. */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          student={props.student}
          interviewer={props.interviewer}

          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm
        message="Are you sure you would like to delete?"
        onConfirm={remove}
        onCancel={back}
      />}
    </article>
  );
}