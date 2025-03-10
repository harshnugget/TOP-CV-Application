export default function ContactInfo({ contactInfo, setContactInfo }) {
  function handleChange(field, value) {
    setContactInfo({ ...contactInfo, [field]: value });
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
          value={contactInfo.firstName}
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
          value={contactInfo.lastName}
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
          value={contactInfo.phone}
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
          value={contactInfo.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </label>
    </div>
  );
}
