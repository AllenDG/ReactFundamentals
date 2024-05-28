import PropTypes from "prop-types";

export function UserDetails({ user }) {
  return (
    <div>
      <b>Id: </b>
      <span>{user.id}</span>
      <br />

      <b>username: </b>
      <span>{user.username}</span>
      <br />

      <b>email: </b>
      <span>{user.email}</span>
      <br />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
