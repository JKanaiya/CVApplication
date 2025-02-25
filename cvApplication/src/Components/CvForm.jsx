import { useState } from "react";
import { Preview } from "./Preview.jsx";

const CvForm = function () {
  const [cv, setCv] = useState({
    firstName: "John",
    secondName: "Doe",
    resumeDetails: "A worker in a job",
    phoneNumber: "0123456789",
    email: "johnDoe@email.com",
    address: "realPlaceInRealCountry",
    website: "johndoe.com",
  });
  const handleNameChange = function () {
    setCv({ ...cv, firstName, secondName });
  };

  const handleResumeChange = function () {
    setCv({ ...cv, resumeDetails });
  };

  const handleEmailChange = function () {
    setCv({ ...cv, email });
  };
  const handleWebsiteChange = function () {
    setCv({ ...cv, website });
  };
  const handlePhoneNumberChange = function () {
    setCv({ ...cv, phoneNumber });
  };
  const handleAddressChange = function () {
    setCv({ ...cv, address });
  };
  const [firstName, setFirstName] = useState("John");
  const [secondName, setSecondName] = useState("Doe");
  const [resumeDetails, setResumeDetails] = useState("A worker in a job");
  const [email, setEmail] = useState("johnDoe@email.com");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [address, setAddress] = useState("realPlaceInRealCountry");
  const [website, setWebsite] = useState("johndoe.com");
  // TODO: Ensure the details properly from this
  return (
    <section>
      <h2> CV </h2>
      <form action="">
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
            handleNameChange(e.target.value);
          }}
        ></input>
        <input
          type="text"
          id="secondName"
          onChange={(e) => {
            setSecondName(e.target.value);
            handleNameChange(e.target.value);
          }}
        ></input>
        <h3>Profile</h3>
        <input
          id="resumeDetails"
          type="text"
          onChange={(e) => {
            setResumeDetails(e.target.value);
            handleResumeChange(e.target.value);
          }}
        >
          onChange={(e) => handleResumeChange(e.target.value)}
        </input>
        <h3>Contact</h3>
        <input
          type="text"
          id="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            handlePhoneNumberChange(e.target.value);
          }}
        ></input>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
            handleEmailChange(e.target.value);
          }}
        ></input>
        <input
          type="text"
          id="address"
          onChange={(e) => {
            setAddress(e.target.value);
            handleAddressChange(e.target.value);
          }}
        ></input>
        <input
          type="text"
          id="website"
          onChange={(e) => {
            setWebsite(e.target.value);
            handleWebsiteChange(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
      <Preview />
    </section>
  );
};

export default CvForm;
