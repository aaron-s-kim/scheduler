import React from 'react';

// allows user to choose which time slot to book
export default function Empty(props) {
  // onAdd:Func
  const {onAdd} = props;

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