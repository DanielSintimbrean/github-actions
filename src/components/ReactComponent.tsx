import React from "react";
import { useState } from "react";

export default function ReactComponent() {
  const [contador, setContador] = useState(0);

  return (
    <div className="flex flex-col max-w-lg mt-9 justify-center items-center">
      <div className="text-primary-focus text-center mb-5 gap-5">
        Hello from ReactComponent - {contador}
      </div>
      <button
        className="btn btn-primary max-w-md"
        disabled={contador >= 10}
        onClick={() => setContador((prev) => prev + 1)}
      >
        {contador === 0 ? "Click me" : "Click me again"}
      </button>
      {contador > 0 && (
        <button
          className="btn btn-secondary max-w-md"
          onClick={() => setContador((prev) => prev - 1)}
        >
          {"Decrement"}
        </button>
      )}
    </div>
  );
}
