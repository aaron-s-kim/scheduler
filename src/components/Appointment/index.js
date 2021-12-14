import React, { useEffect } from 'react';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

export default function Appointment(props) {
  // id:Num, time:Str - appt time, interviewers:ArrOfObjs
  // interview:Obj {student: {}, interviewer: {id, name, avatar}}
  const {id, time, interview, interviewers, bookInterview, cancelInterview } = props;
  const EMPTY = "EMPTY", SHOW = "SHOW", CREATE = "CREATE", SAVING = "SAVING", DELETING = "DELETING", CONFIRM="CONFIRM", EDIT="EDIT";
  const ERROR_SAVE = "ERROR_SAVE", ERROR_DELETE="ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  
  // useEffect(() => {
  //   if (interview && mode === EMPTY) transition(SHOW);
  //   if (!interview && mode === SHOW) transition(EMPTY);
  // }, [mode, transition, interview])

  const save = (name, interviewer) => {
    if (name && interviewer) {
      const interview = {
        student: name,
        interviewer
      };
      transition(SAVING);
      bookInterview(id, interview)
        .then(() => transition(SHOW))
        .catch(err => {
          transition(ERROR_SAVE, true)
          console.log(err)
        });
    }
  }
  
  const destroy = () => {
    transition(DELETING, true);
    cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(err => {
        transition(ERROR_DELETE, true)
        console.log(err)
      });
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
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE &&
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      }
      {mode === EDIT &&
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}

          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      }
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === ERROR_SAVE && <Error
        message="Could not save appointment"
        onClose={back}
      />}
      {mode === ERROR_DELETE && <Error
        message="Could not cancel appointment"
        onClose={back}
      />}
      {mode === CONFIRM && <Confirm
        message="Are you sure you would like to delete?"
        onConfirm={destroy}
        onCancel={back}
      />}

    </article>
  );
}