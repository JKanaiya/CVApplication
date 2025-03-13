import { nanoid } from "nanoid";
import { useState } from "react";
import { FaPhone, FaPlus } from "react-icons/fa6";
import { IoGlobe, IoHome, IoMail } from "react-icons/io5";

function CvForm({ cv, sendData, form, display }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.set("workData", JSON.stringify(workData));
    formData.set("schoolData", JSON.stringify(schoolData));
    sendData(Object.fromEntries(formData));
    console.log(workOutput);
  };

  const [workData, setWorkData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);

  const addWorkData = function () {
    setWorkData([
      ...workData,
      {
        id: nanoid(),
        dateStart: "",
        dateEnd: "",
        jobTitle: "",
        company: "",
      },
    ]);
  };

  const addSchoolData = function () {
    setSchoolData([
      ...schoolData,
      {
        id: nanoid(),
        completedDate: "",
        course: "",
        school: "",
      },
    ]);
  };

  const changeWorkVal = function (id, val, data) {
    workData.forEach((ind) => {
      if (ind.id == id) {
        switch (data) {
          case "dateStart":
            ind.dateStart = val;
            break;
          case "dateEnd":
            ind.dateEnd = val;
            break;
          case "jobTitle":
            ind.jobTitle = val;
            break;
          case "company":
            ind.company = val;
            break;
          default:
            break;
        }
      }
    });
  };

  const changeSchoolVal = function (id, val, data) {
    schoolData.forEach((ind) => {
      if (ind.id == id) {
        switch (data) {
          case "completedDate":
            ind.completedDate = val;
            break;
          case "course":
            ind.course = val;
            break;
          case "school":
            ind.school = val;
            break;
          default:
            break;
        }
      }
    });
  };

  const workOutput = workData.map((row) => {
    return (
      <tr key={row.id}>
        <td data="From:">
          <input
            type="date"
            className="date"
            name="dateStart"
            onChange={(e) => {
              changeWorkVal(row.id, e.target.value, "dateStart");
            }}
          ></input>
        </td>
        <td data="To:">
          <input
            type="date"
            id="endOfWork"
            className="date"
            name="dateEnd"
            onChange={(e) => changeWorkVal(row.id, e.target.value, "dateEnd")}
          ></input>
        </td>
        <td data="job title:">
          <input
            type="text"
            name="jobTitle"
            onChange={(e) => changeWorkVal(row.id, e.target.value, "jobTitle")}
          ></input>
        </td>
        <td data="company:">
          <input
            type="text"
            name="company"
            onChange={(e) => changeWorkVal(row.id, e.target.value, "company")}
          ></input>
        </td>
      </tr>
    );
  });

  const schoolOutput = schoolData.map((row) => {
    return (
      <tr key={row.id}>
        <td data="Completed:">
          <input
            type="date"
            className="date"
            name="completedDate"
            onChange={(e) =>
              changeSchoolVal(row.id, e.target.value, "completedDate")
            }
          ></input>
        </td>
        <td data="Course:">
          <input
            type="text"
            name="course"
            onChange={(e) => changeSchoolVal(row.id, e.target.value, "course")}
          ></input>
        </td>
        <td data="School:">
          <input
            type="text"
            name="school"
            onChange={(e) => changeSchoolVal(row.id, e.target.value, "school")}
          ></input>
        </td>
      </tr>
    );
  });

  return (
    <section style={{ display: `${display}` }}>
      <form id="form" onSubmit={handleSubmit}>
        <h1> CV </h1>
        <fieldset id="nameAndPersonal">
          <legend>Name and Personal Pitch</legend>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
          ></input>
          <input
            type="text"
            id="secondName"
            name="secondName"
            placeholder="Second Name"
          ></input>
          <textarea
            id="resumeDetails"
            type="text"
            name="resumeDetails"
            placeholder="Resume"
          ></textarea>
        </fieldset>
        <fieldset id="contactDetails">
          <legend>Contact Details</legend>
          <div className="contactContainer">
            <FaPhone />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
            ></input>
          </div>
          <div className="contactContainer">
            <IoMail />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="contactContainer">
            <IoHome />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
            ></input>
          </div>
          <div className="contactContainer">
            <IoGlobe />
            <input
              type="text"
              id="website"
              name="website"
              placeholder="Website"
            ></input>
          </div>
        </fieldset>
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
      <div>
        <fieldset id="education">
          <legend>
            Education
            <button type="button" id="addEducationRow" onClick={addSchoolData}>
              +
            </button>
          </legend>
          <table>
            <thead>
              <tr>
                <th>Completed</th>
                <th>Study</th>
                <th>School</th>
              </tr>
            </thead>
            <tbody>{schoolOutput}</tbody>
          </table>
        </fieldset>
        <fieldset id="work">
          <legend>
            Work Experience
            <button type="button" id="addWorkRow" onClick={addWorkData}>
              +
            </button>
          </legend>
          <table>
            <thead>
              <tr>
                <th>From:</th>
                <th>To:</th>
                <th>Job Title</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>{workOutput}</tbody>
          </table>
        </fieldset>
      </div>
      {/*TODO: change these to icons + and - later*/}
    </section>
  );
}

export default CvForm;
