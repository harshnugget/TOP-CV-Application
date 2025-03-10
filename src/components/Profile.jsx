import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState("");

  function handleChange(e) {
    setProfile(e.target.value);
  }

  return (
    <div>
      <label htmlFor="profile">
        Profile:{" "}
        <textarea
          id="profile"
          name="profile"
          placeholder="Write a short summary about yourself..."
          value={profile}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
