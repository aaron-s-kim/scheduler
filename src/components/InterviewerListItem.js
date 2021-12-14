import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

// represents 1 interviewer
// State 1. Unselected: only shows image of interviewer
// State 2. Selected: highlights item w/ white bg, shows interviewer name
export default function InterviewerListItem(props) {
  // name:Str - interviewer name, avatar:url - url to interviewer image
  // selected:Bool - if interviewer selected, displays name and appropriate styles
  // setInterviewer:Func - on click, passes interviewer id and sets interviewer
  const {name, avatar, selected, setInterviewer} = props;

  const interviewerClass = classNames ('interviewers__item', {
    'interviewers__item--selected': selected
  })

  return (
    <li onClick={setInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
}