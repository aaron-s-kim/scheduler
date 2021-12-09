import React, { useState } from "react";

import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
// import classNames from "classnames";

// holds all InterviewerListItem components together
export default function InterviewerList(props) {
  // interviewers:array - array of objects [ interviewer{id, name, avatar}, ... ]
  // onChange:function - function that accepts interviewer id. This function will just be passed down to the InterviewerListItem
  // value:number - number that represents id of currently selected interviewer
  const {interviewers, onChange, value} = props;
  // const [state, setState] = useState('');

  const parsedInterviewers = interviewers.map(i =>
    <InterviewerListItem
      key={i.id} name={i.name} avatar={i.avatar}
      selected={i.id === value}
      setInterviewer={() => onChange(i.id)}
    />
  );

  // const interviewerClass = classNames('interviewers', {
  // });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>
    </section>
  );
}