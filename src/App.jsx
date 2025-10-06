import { useState } from "react";

function App() {
  const [fullname, setFullname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstname = event.target.firstname.value.trim();
    const lastname = event.target.lastname.value.trim();

    // Only set full name if both fields are filled
    if (firstname && lastname) {
      setFullname(`${firstname} ${lastname}`);
    } else {
      setFullname(""); // Ensure empty if one field missing
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Full Name Display</h1>
      </div>

      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
          />
          <br /><br />

          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
          />
          <br /><br />

          {/* ✅ Add id="next" — Cypress expects this */}
          <button id="next" type="submit">
            Submit
          </button>
        </form>

        {/* ✅ Show full name only if both fields were valid */}
        {fullname && (
          <h3 style={{ marginTop: "20px" }}>Full Name: {fullname}</h3>
        )}
      </div>
    </>
  );
}

export default App;
