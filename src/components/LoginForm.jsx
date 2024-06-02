import { useEffect } from "react";

export function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = (event) => {
      console.log("Window/Viewport Resized!");
    };
    const handleDocumentClick = () => {
      console.log("Clicked Document!");
    };

    window.addEventListener("resize", resizeEventHandler);
    document.addEventListener("click", handleDocumentClick);

    //cleanup Function
    return () => {
      console.log("Unmounting LoginForm");
      console.log("Removing Resize Event Listener");
      window.removeEventListener("resize", resizeEventHandler);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const username = new FormData.get("username");
        const password = new FormData.get("password");
        fetch("http://localhost:3001/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        onChange={(event) => {
          console.log(`Username: ${event.target.value}`);
        }}
        name="username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        type="password"
        onChange={(event) => {
          console.log(`Password: ${event.target.value}`);
        }}
        name="password"
      />
      <br />
      <br />
      <button>Login</button>
    </form>
  );
}
