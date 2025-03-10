export default function Profile({ profile, setProfile }) {
  return (
    <div>
      <label htmlFor="profile">
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
