import { nanoid } from "nanoid";
const UserInfo = function (cv) {
  let schoolData = "";
  let workData = "";
  if (cv.schoolData.length > 0) {
    schoolData = JSON.parse(cv.schoolData).map((v) => {
      return (
        <tr key={nanoid()}>
          <td>{v.course}</td>
          <td>{v.school}</td>
          <td>{v.completedDate}</td>
        </tr>
      );
    });
  }

  if (cv.workData.length > 0) {
    workData = JSON.parse(cv.workData).map((v) => {
      return (
        <tr key={nanoid()}>
          <td>{v.jobTitle}</td>
          <td>{v.company}</td>
          <td>{v.dateStart}</td>
          <td>{v.dateEnd}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table>
        <caption>Work Experience</caption>
        <thead>
          <tr>
            <td>Job Title: </td>
            <td>Company: </td>
            <td>From:</td>
            <td>To: </td>
          </tr>
        </thead>
        <tbody>{workData}</tbody>
      </table>
      <table>
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
export default UserInfo;
