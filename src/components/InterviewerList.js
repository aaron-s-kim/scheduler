import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

// holds all InterviewerListItem components
export default function InterviewerList(props) {
  const {interviewers, onChange, value} = props; // interviewers:ArrOfObjs, onChange:func, value:Num selected interviewer id

  const parsedInterviewers = interviewers.map(i =>
    <InterviewerListItem
      key={i.id}
      name={i.name}
      avatar={i.avatar}
      selected={i.id === value}
      setInterviewer={() => onChange(i.id)}
    />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
