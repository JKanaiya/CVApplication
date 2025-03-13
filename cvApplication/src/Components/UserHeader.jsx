import { IoPersonCircleOutline } from "react-icons/io5";
const UserHeader = function ({ firstName, secondName, resume }) {
  return (
    <div id="names">
      <h1>
        <IoPersonCircleOutline />
        {firstName} {secondName}
        <br />
      </h1>
      <h3>{resume}</h3>
    </div>
  );
};

export default UserHeader;
