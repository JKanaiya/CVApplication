import { useState } from "react";

const UserDetails = () => {
  const [name, setName] = useState();
  const increment = function () {
    setName("blank");
  };
  return (
    <div>
      <button onClick={increment}>{name}</button>
    </div>
  );
};

export default UserDetails;
