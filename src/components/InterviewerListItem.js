import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

// represents 1 interviewer, 2 states: Unselected (image), Selected (white bg, interviewer name)
export default function InterviewerListItem(props) {
  // setInterviewer:Func on click, passes interviewer id and sets interviewer
  const {name, avatar, selected, setInterviewer} = props; // name:Str interviewer name, avatar:url interviewer image, selected:Bool if interviewer selected, shows name and styles

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