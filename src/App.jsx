import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("render...");
    document.title = "Fundamental of React ";
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();
    controller.signal;
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        const json = await response.json();
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  });

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click me</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
    </div>
  );
}
