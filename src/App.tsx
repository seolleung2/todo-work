import { useState } from "react";

interface ComponentProps {
  name?: string;
}

function App({ name = "Guest" }: ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-md bg-blue-100 p-4 shadow-sm">
      <h1 className="mb-2 text-xl font-bold">Hello, {name}</h1>
      <p className="mb-4 text-gray-700">You clicked {count} times</p>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
