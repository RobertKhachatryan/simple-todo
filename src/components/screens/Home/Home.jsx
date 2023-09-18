import React, { useState } from "react";
import { TodoItem } from "./item/TodoItem";
import { CreateTodoField } from "./CreateTodoFiled/CreateTodoField";

const data = [
  {
    id: 1,
    title: "Finish homework",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Finish homework",
    isCompleted: false,
  },
];

export const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodoState = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodoItem = (id) =>
    setTodos([...todos].filter((todo) => todo.id !== id));

  return (
    <div className=" text-white w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">TODO</h1>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id * Math.random()}
            todo={todo}
            changeTodoState={changeTodoState}
            removeTodoItem={removeTodoItem}
          />
        );
      })}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};
