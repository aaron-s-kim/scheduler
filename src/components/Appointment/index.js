import React from 'react';
import "components/Appointment/styles.scss";
import useVisualMode from 'hooks/useVisualMode';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';

export default function Appointment(props) {
  // id:Number
  // time:String - time of appointment (e.g "12pm")
  // interview:Object - i.e. story: array of objs
    // interview = {
    //   "student": "Lydia Miller-Jones",
    //   "interviewer": { "id": 1, "name": "Sylvia Palmer", "avatar": "https://i.imgur.com/LpaY82x.png" }
    // };
  const {id, time, interview} = props;
  const EMPTY = "EMPTY", SHOW = "SHOW", CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={time} />
      {/* If interview has value, render Show, else render Empty. */}
      {/* {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />} */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={[]}
          onCancel={() => back()}
        />
      )}
    </article>
  );
}