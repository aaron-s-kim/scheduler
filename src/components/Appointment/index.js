import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

export default function Appointment(props) {
  // id:Number
  // time:String - time of appointment (e.g "12pm")
  // interview:Object - i.e. story: array of objs
  const {id, time, interview} = props;
  // const interview = {
  //   "student": "Lydia Miller-Jones",
  //   "interviewer": { "id": 1, "name": "Sylvia Palmer", "avatar": "https://i.imgur.com/LpaY82x.png" }
  // };

  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show
        student={interview.student}
        interviewer={interview.interviewer}
      /> : <Empty />}
    </article>
  );
}