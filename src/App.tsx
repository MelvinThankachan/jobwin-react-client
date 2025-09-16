import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-dvw h-dvh flex flex-col gap-10 justify-center items-center">
      <h1 className="text-6xl font-bold">JobWin Client</h1>
      <p className="">JobWin - Win your jobs here.</p>
      <div className="">
        <button
          className="px-6 py-2 rounded border-2 active:scale-90 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white motion-loop-infinite motion-preset-blink"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
