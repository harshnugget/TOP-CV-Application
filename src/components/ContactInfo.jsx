import { useState } from "react";

export default function ContactInfo() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
