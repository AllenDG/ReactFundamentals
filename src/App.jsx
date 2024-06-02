import { useState, useEffect } from "react";
import { LoginForm } from "./components/LoginForm";

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((currenState) => !currenState)}>
        Toggle
      </button>
      {toggle && <LoginForm />}
    </div>
  );
}
