import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";
import UserHeader from "./UserHeader";

const Preview = function ({ cv, display, editData }) {
  return (
    <div id="preview" style={{ display: `${display}` }}>
      <UserHeader firstName={cv.firstName} secondName={cv.secondName} />
      <UserDetails {...cv} />
      <UserInfo {...cv} />
      <button onClick={editData}></button>
    </div>
  );
};
export default Preview;
