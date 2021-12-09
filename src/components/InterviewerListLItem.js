import React, { useState } from "react";

import classNames from "classnames";

// represents 1 interviewer
// 2 states:
//  1. when not selected, only shows image of interviewer
//  2. when selected, will highlight item w/ white bg and show interviewer name
export default function InterviewerListItem(props) {
  // id:number - id of the interviewer
  // name:string - name of the interviewer
  // avatar:url - url to image of the interviewer
  // selected:boolean - determines if interviewer is selected or not and displays name and appropriate styles if selected.
  // setInterviewer:function - func run when InterviewerListItem is clicked
    // receives interviewer id as arg, then sets selected interviewer
  const {id, name, avatar, selected, setInterviewer} = props;
  const [item, setItem] = useState('');

  return (
    <li className="interviewers__item">
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
}