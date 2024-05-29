import { useState } from "react";

export function RegisterForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input
          id="username"
          value={formFields.username}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              username: event.target.value,
            }));
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="displayName">Display Name</label>
        <br />
        <input
          id="displayName"
          value={formFields.displayName}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: event.target.value,
            }));
          }}
        />
      </div>
      <br />

      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={formFields.password}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: event.target.value,
            }));
          }}
        />
      </div>
      <br />

      <div>
        <label htmlFor="confrimPassword">Confirm Password</label>
        <br />
        <input
          id="confrimPassword"
          type="password"
          value={formFields.confirmPassword}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              confirmPassword: event.target.value,
            }));
          }}
        />
      </div>
      <br />
      <div>
        <span>Username: {username}</span>
      </div>

      <div>
        <span>Display Name:: {displayName}</span>
      </div>

      <div>
        <span>Password: {password}</span>
      </div>

      <div>
        <span>Confirm Password: {confirmPassword}</span>
      </div>

      <button disabled={isDisabled}> Sign up</button>
    </form>
  );
}
