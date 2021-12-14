import React from 'react';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

export default function Appointment(props) {
  // id:Num, time:Str - appt time, interviewers:ArrOfObjs
  // interview:Obj {student: {}, interviewer: {id, name, avatar}}
  const {id, time, interview, interviewers, bookInterview, cancelInterview } = props;
  const EMPTY = "EMPTY", SHOW = "SHOW", CREATE = "CREATE", SAVING = "SAVING", DELETING = "DELETING", CONFIRM="CONFIRM", EDIT="EDIT";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  if (interview) console.log(interview.interviewer.id);
  

  const save = (name, interviewer) => {
    if (name && interviewer) {
      const interview = {
        student: name,
        interviewer
      };
      transition(SAVING);
      bookInterview(id, interview)
        .then(() => transition(SHOW));
    }
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
      {mode === CONFIRM && <Confirm
        message="Are you sure you would like to delete?"
        onConfirm={remove}
        onCancel={back}
      />}
    </article>
  );
}