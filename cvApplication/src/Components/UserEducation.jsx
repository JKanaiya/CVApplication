import { nanoid } from "nanoid";
const UserEducation = (cv) => {
  let schoolData = "";
  if (cv.schoolData.length > 0) {
    schoolData = JSON.parse(cv.schoolData).map((v) => {
      return (
        <tr key={nanoid()}>
          <td data="course:">{v.course}</td>
          <td data="school:">{v.school}</td>
          <td data="Completed:">{v.completedDate}</td>
        </tr>
      );
    });
  }
  return (
    <div id="edContainer">
      <table id="edTable">
        <caption>Education</caption>
        <thead>
          <tr>
            <td>Course:</td>
            <td>School:</td>
            <td>Completed:</td>
          </tr>
        </thead>
        <tbody>{schoolData}</tbody>
      </table>
    </div>
  );
};

export default UserEducation;
