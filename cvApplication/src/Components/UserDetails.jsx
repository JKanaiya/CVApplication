const UserDetails = function ({ firstName, secondName }) {
  const name = firstName + " " + secondName;
  return <div>{name}</div>;
};

export default UserDetails;
