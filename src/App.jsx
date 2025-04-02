import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
// import "./App.css";

function App() {
  const [data, setData] = useState({
    contactInfo: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    profile: "",
    jobs: [],
    educations: [],
    skills: [],
  });

  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Form formData={data} updateFormData={updateData} />
      <CV cvData={data} />
    </>
  );
}

export default App;
