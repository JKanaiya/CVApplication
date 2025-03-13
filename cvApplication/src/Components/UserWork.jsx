import { nanoid } from "nanoid";
const UserWork = (cv) => {
  let workData = "";
  if (cv.workData.length > 0) {
    workData = JSON.parse(cv.workData).map((v) => {
      return (
        <tr key={nanoid()}>
          <td data="Job Title:">{v.jobTitle}</td>
          <td data="Company:">{v.company}</td>
          <td data="Hired:">{v.dateStart}</td>
          <td data="Completed:">{v.dateEnd}</td>
        </tr>
      );
    });
  }
  return (
    <div id="wkContainer">
      <table id="wkTable">
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
    </div>
  );
};

export default UserWork;
