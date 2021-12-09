import React, { useState } from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

// represents 1 interviewer
// State 1. when not selected, only shows image of interviewer
// State 2. when selected, will highlight item w/ white bg and show interviewer name
export default function InterviewerListItem(props) {
  // name:string - name of the interviewer
  // avatar:url - url to image of the interviewer
  // selected:boolean - determines if interviewer is selected or not and displays name and appropriate styles if selected.
  // setInterviewer:function - run when InterviewerListItem is clicked, receives interviewer id as arg, then sets selected interviewer
  const {name, avatar, selected, setInterviewer} = props;
  // const [state, setState] = useState('');

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