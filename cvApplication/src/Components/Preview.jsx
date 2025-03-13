import UserDetails from "./UserDetails";
import UserWork from "./UserWork";
import UserEducation from "./UserEducation";
import UserHeader from "./UserHeader";

const Preview = function ({ cv, display, editData }) {
  return (
    <>
      <div id="preview" style={{ display: `${display}` }}>
        <UserHeader
          firstName={cv.firstName}
          secondName={cv.secondName}
          resume={cv.resumeDetails}
        />
        <UserWork {...cv} />
        <UserDetails {...cv} />
        <UserEducation {...cv} />
      </div>
      <button id="edit" onClick={editData} style={{ display: `${display}` }}>
        Edit
      </button>
    </>
  );
};
export default Preview;
