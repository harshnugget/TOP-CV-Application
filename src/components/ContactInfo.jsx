export default function ContactInfo() {
  return (
    <div className="contact-info">
      <label htmlFor="fname">
        First name: <input type="text" id="fname" name="firstName" />
      </label>

      <label htmlFor="lname">
        Last name: <input type="text" id="lname" name="lastName" />
      </label>

      <label htmlFor="phone">
        Phone: <input type="tel" id="phone" name="phone" />
      </label>

      <label htmlFor="email">
        Email: <input type="email" id="email" name="email" />
      </label>
    </div>
  );
}
