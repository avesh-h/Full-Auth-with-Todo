import React, { useState } from "react";

const getLocalTodos = () => {
  const currUser = JSON.parse(localStorage.getItem("Current_User"));

  const localTodo = JSON.parse(localStorage.getItem("todos"));
  if (localTodo) {
    const personalTodos = localTodo.filter(
      (todo) => todo.todoId === currUser.userId
    );
    return personalTodos;
  } else {
    return [];
  }
};

const Todo = () => {
  const [userTodo, setUserTodo] = useState({});
  const currUser = JSON.parse(localStorage.getItem("Current_User"));

  const [currTodos, setCurrTodos] = useState(getLocalTodos);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserTodo({
      ...userTodo,
      todoId: currUser.userId,
      [name]: value,
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];

    if (userTodo.number > 0 && userTodo.todo.length > 0) {
      const allTodos = [...localTodos, userTodo];

      setCurrTodos(allTodos.filter((todo) => todo.todoId === currUser.userId));

      localStorage.setItem("todos", JSON.stringify(allTodos));
    } else {
      return;
    }
  };

  return (
    <>
      <form onSubmit={addHandler}>
        <h2>Welcome User</h2>
        <h3>Add Todo:</h3>
        <br />
        <label>Task No:</label>
        <input type="number" name="number" onChange={changeHandler} />
        <input type="text" name="todo" onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
      <div>
        {currTodos &&
          currTodos.map((todo, index) => {
            return (
              <div key={`${todo.number}-${todo.todoId}-${index}`}>
                <p>{todo.number}</p>
                <p>{todo.todo}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Todo;
