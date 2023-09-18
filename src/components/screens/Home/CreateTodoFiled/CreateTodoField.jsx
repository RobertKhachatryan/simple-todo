import React, { useState } from "react";

export const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 mt-20 w-full">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        placeholder="Add a task"
        className="bg-transparent w-full border-none outline-none"
      />
    </div>
  );
};
