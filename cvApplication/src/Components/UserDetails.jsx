import { FaPhone } from "react-icons/fa6";
import { IoMail, IoHomeSharp, IoGlobe } from "react-icons/io5";
const UserDetails = function (cv) {
  return (
    <div>
      <h2>Contact Me!</h2>
      <h3>
        <FaPhone />
        {cv.phoneNumber}
      </h3>
      <h3>
        <IoMail />
        {cv.email}
      </h3>
      <h3>
        <IoHomeSharp />
        {cv.address}
      </h3>
      <h3>
        <IoGlobe />
        {cv.website}
      </h3>
    </div>
  );
};

export default UserDetails;
