import { IoPersonCircleOutline } from "react-icons/io5";
const UserHeader = function ({ firstName, secondName }) {
  return (
    <div>
      <h1>
        <IoPersonCircleOutline />
        {firstName} {secondName}
      </h1>
    </div>
  );
};

export default UserHeader;
