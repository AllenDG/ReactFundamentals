import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "allen",
      email: "allen@gmail.com",
    },
    {
      id: 2,
      username: "jedyne",
      email: "jedyne@gmail.com",
    },
  ]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };
          setCounter((currenCounter) => currenCounter + 1);
          setUsers((currenUserState) => [...currenUserState, newUser]);
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="user"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button>Add User</button>
      </form>
      <br />
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
