import { useState } from "react";
import PropTypes from "prop-types";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id}</span>
        <br />

        <b>username: </b>
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />

        <b>email: </b>
        {isEditing ? (
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
      </div>
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setUsers((currentUserState) =>
              currentUserState.filter(
                (currentUser) => currentUser.id !== user.id
              )
            );
          }}
        >
          Delet
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUserState) => {
                return currentUserState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                );
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
