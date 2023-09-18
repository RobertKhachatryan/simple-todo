import React from "react";
import { Checkbox } from "./Checkbox";
import cn from "classnames";

export const TodoItem = ({ todo, changeTodoState }) => {
  return (
    <button
      className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-4 w-full"
      onClick={() => changeTodoState(todo.id)}
    >
      <Checkbox isCompleted={todo.isCompleted} />
      <span className={cn({ "line-through": todo.isCompleted })}>
        {todo.title}
      </span>
    </button>
  );
};
