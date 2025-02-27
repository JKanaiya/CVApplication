import { useState } from "react";
import CvForm from "./CvForm.jsx";
import "../Styles/App.css";
import Preview from "./Preview.jsx";

function App() {
  const [cv, setCv] = useState({
    firstName: "John",
    secondName: "Doe",
    resumeDetails: "A worker in a job",
    phoneNumber: "0123456789",
    email: "johnDoe@email.com",
    address: "realPlaceInRealCountry",
    website: "johndoe.com",
  });
  const handleCvChange = function (cv) {
    setCv({ ...cv });
  };
  return (
    <>
      <CvForm cv={cv} handleCvChange={handleCvChange} />
      <Preview cv={cv} />
    </>
  );
}

export default App;
