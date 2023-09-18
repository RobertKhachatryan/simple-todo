import React from "react";
import { BsCheckLg } from "react-icons/bs";
import cn from "classnames";
export const Checkbox = ({ isCompleted }) => {
  return (
    <div
      className={cn(
        "border-2 rounded-lg border-pink-400 w-6 h-6 mr-4 flex items-center justify-center",
        { "bg-pink-400": isCompleted }
      )}
    >
      {isCompleted && <BsCheckLg className="text-gray-900" size={24} />}
    </div>
  );
};
