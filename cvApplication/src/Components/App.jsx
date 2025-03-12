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

  const [displayPrev, setDisplayPrev] = useState("none");
  const [displayForm, setDisplayForm] = useState("flex");

  const togglePreview = function () {
    setDisplayPrev(displayPrev == "none" ? "grid" : "none");
    setDisplayForm(displayForm == "none" ? "flex" : "none");
  };

  const sendData = function (formData) {
    setCv({ ...formData });
    togglePreview();
  };

  const editData = function () {
    togglePreview();
  };

  return (
    <>
      <CvForm sendData={sendData} display={displayForm} />
      <Preview cv={cv} display={displayPrev} editData={editData} />
    </>
  );
}

export default App;
