import React from 'react';

// allows user to choose which time slot to book
export default function Empty(props) {
  const {onAdd} = props; // onAdd:Func

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  );
}