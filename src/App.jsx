import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import Page from "./new-feature/Page";
// import "./App.css";

function App() {
  return (
    <>
      {/* <Form formData={data} updateFormData={updateData} />
      <CV cvData={data} /> */}
      <Page />
    </>
  );
}

export default App;
