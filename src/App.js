import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  const [currTodos, setCurrTodos] = useState([]);
  const addHandler = (currUserId) => {
    const todoArr = JSON.parse(localStorage.getItem("todos"));
    const currUserTodo = todoArr.filter((user) => user.todoId === currUserId);
    setCurrTodos([...currUserTodo]);
  };
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={<Todo onAddTodo={addHandler} />}
            />
          </Routes>
        </div>
      </Router>
      <Todos CurrentUserTodos={currTodos} />
    </>
  );
}

export default App;
