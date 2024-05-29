import { RegisterForm } from "./components/RegisterForm";

export default function App() {
  window.addEventListener("resize", (event) => {
    console.log(window.innerHeight, window.innerWidth);
  });

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
