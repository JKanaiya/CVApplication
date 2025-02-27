import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";
import UserHeader from "./UserHeader";

const Preview = function ({ cv }) {
  return (
    <div>
      <UserHeader {...cv} />
      <UserInfo {...cv} />
      <UserDetails firstName={cv.firstName} secondName={cv.secondName} />
    </div>
  );
};
export default Preview;
