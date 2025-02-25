import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";
import UserHeader from "./UserHeader";

const Preview = function (cv) {
  return (
    <div>
      <UserHeader {...cv} />
      <UserInfo {...cv} />
      <UserDetails {...cv} />
    </div>
  );
};
export default Preview;
