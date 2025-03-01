import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";
import UserHeader from "./UserHeader";

const Preview = function ({ cv }) {
  return (
    <div>
      <UserHeader firstName={cv.firstName} secondName={cv.secondName} />
      <UserInfo resumeDetails={cv.resumeDetails} />
      <UserDetails {...cv} />
    </div>
  );
};
export default Preview;
