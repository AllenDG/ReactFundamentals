import { LoginForm } from "./components/LoginForm";

export default function App() {
  window.addEventListener("resize", (event) => {
    console.log(window.innerHeight, window.innerWidth);
  });

  return (
    <div>
      <LoginForm />
    </div>
  );
}
