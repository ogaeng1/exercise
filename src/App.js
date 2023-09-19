import Calculator from "./components/Calculator";
import { useState } from "react";
import CalculatorContext from "./context/CalcuContext";

function App() {
  const [result, setResult] = useState(0);

  const add = (value) => setResult(result + value);
  const subtract = (value) => setResult(result - value);
  const multiply = (value) => setResult(result * value);
  const divide = (value) => setResult(result / value);
  const reset = () => setResult(0);
  return (
    <CalculatorContext.Provider value={{ result, add, subtract, multiply, divide, reset }}>
      <Calculator />
    </CalculatorContext.Provider>
  );
}

export default App;


// 25번째 라인부터 투두리스트 코드

// import TodoList from "./components/TodoList";
// import todoContext from "./context/TodoContext";
// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const onAddTodo = (content) => {
//     const newTodo = {
//       id: todos.length,
//       content,
//       isDone: false
//     }
//     setTodos([...todos, newTodo]);
//   }

//   const onDeleteTodo = (id) => {
//     const newTodo = todos.filter(todo => todo.id !== id);
//     setTodos(newTodo);
//   }

//   const onToggleTodo = (id) => {
//     const newTodo = todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo);
//     setTodos(newTodo);
//   }

//   return (
//     <todoContext.Provider value={{ todos, onAddTodo, onDeleteTodo, onToggleTodo }}>
//       <TodoList />
//     </todoContext.Provider>
//   )
// }

// export default App;