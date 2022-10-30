import React, { useState, useEffect } from "react";

const Todos = ({ CurrentTodos }) => {
  // const getTodos = JSON.parse(localStorage.getItem("todos"));
  // console.log(CurrentTodos);

  return (
    <div>
      {/* {CurrentTodos.map((todo) => {
        return (
          <>
            <p>{todo.number}</p>
            <p>{todo.todo}</p>
          </>
        );
      })} */}
    </div>
  );
};

export default Todos;
