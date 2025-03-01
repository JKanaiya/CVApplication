const UserDetails = function (cv) {
  return (
    <div>
      <h2>Contact Me!</h2>
      <h3>{cv.phoneNumber}</h3>
      <h3>{cv.email}</h3>
      <h3>{cv.address}</h3>
      <h3>{cv.website}</h3>
    </div>
  );
};

export default UserDetails;
