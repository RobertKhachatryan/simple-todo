import React from "react";
import { Checkbox } from "./Checkbox";
import { BsTrash } from "react-icons/bs";
import cn from "classnames";

export const TodoItem = ({ todo, changeTodoState, removeTodoItem }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-4 w-full">
      <button
        className="flex items-center"
        onClick={() => changeTodoState(todo.id)}
      >
        <Checkbox isCompleted={todo.isCompleted} />
        <span className={cn({ "line-through": todo.isCompleted })}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodoItem(todo.id)}>
        <BsTrash
          size={22}
          className="text-gray-500 hover:text-pink-400 transition-colors ease-in-out duration-150"
        />
      </button>
    </div>
  );
};
