import { useState } from "react";

export default function ContactInfo() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleChange(field, value) {
    setContact({ ...contact, [field]: value });
  }

  return (
    <div className="contact-info">
      <label htmlFor="fname">
        First name:{" "}
        <input
          type="text"
          id="fname"
          name="firstName"
          placeholder="Enter your first name"
          value={contact.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
      </label>

      <label htmlFor="lname">
        Last name:{" "}
        <input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Enter your last name"
          value={contact.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </label>

      <label htmlFor="phone">
        Phone:{" "}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={contact.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </label>

      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={contact.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </label>
    </div>
  );
}
