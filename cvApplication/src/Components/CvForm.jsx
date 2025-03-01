import { useState } from "react";

function CvForm({ cv, handleCvChange }) {
  const [firstName, setFirstName] = useState("John");
  const [secondName, setSecondName] = useState("Doe");
  const [resumeDetails, setResumeDetails] = useState("A worker in a job");
  const [email, setEmail] = useState("johnDoe@email.com");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [address, setAddress] = useState("realPlaceInRealCountry");
  const [website, setWebsite] = useState("johndoe.com");

  const handleNameChange = function () {
    handleCvChange({ ...cv, firstName, secondName });
  };
  const handleResumeChange = function (deets) {
    setResumeDetails(deets);
    handleCvChange({ ...cv, resumeDetails });
  };
  const handleEmailChange = function (deets) {
    setEmail(deets);
    handleCvChange({ ...cv, email });
  };
  const handleWebsiteChange = function (deets) {
    setWebsite(deets);
    handleCvChange({ ...cv, website });
  };
  const handlePhoneNumberChange = function (deets) {
    setPhoneNumber(deets);
    handleCvChange({ ...cv, phoneNumber });
  };
  const handleAddressChange = function (deets) {
    setAddress(deets);
    handleCvChange({ ...cv, address });
  };
  // TODO: Ensure the details properly move from this
  return (
    <section>
      <form action="">
        <h2> CV </h2>
        <div id="name">
          <input
            type="text"
            id="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
              handleNameChange(e.target.value);
            }}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            id="secondName"
            onChange={(e) => {
              setSecondName(e.target.value);
              handleNameChange(e.target.value);
            }}
            placeholder="Second Name"
          ></input>
        </div>
        <h3>Profile</h3>
        <div>
          <textarea
            id="resumeDetails"
            type="text"
            onChange={(e) => {
              handleResumeChange(e.target.value);
            }}
            placeholder="Resume"
          ></textarea>
        </div>
        <h3>Contact</h3>
        <div id="details">
          <input
            type="text"
            id="phoneNumber"
            onChange={(e) => {
              handlePhoneNumberChange(e.target.value);
            }}
            placeholder="Phone Number"
          ></input>
          <input
            type="text"
            id="email"
            onChange={(e) => {
              handleEmailChange(e.target.value);
            }}
            placeholder="Email"
          ></input>
          <input
            type="text"
            id="address"
            onChange={(e) => {
              handleAddressChange(e.target.value);
            }}
            placeholder="Address"
          ></input>
          <input
            type="text"
            id="website"
            onChange={(e) => {
              handleWebsiteChange(e.target.value);
            }}
            placeholder="Website"
          ></input>
        </div>
      </form>
      <button>Submit</button>
    </section>
  );
}

export default CvForm;
