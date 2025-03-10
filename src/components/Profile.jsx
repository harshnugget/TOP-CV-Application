import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState("");

  return (
    <div>
      <label htmlFor="profile">
        Profile:{" "}
        <textarea
          id="profile"
          name="profile"
          placeholder="Write a short summary about yourself..."
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
      </label>
    </div>
  );
}
