import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("Registration Successful!");

    // Fetch API AFTER clicking register
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const newUser = { name, email };
        setUsers([newUser, ...data.slice(0, 4)]);
      });

    // Clear inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p className="message">{message}</p>

      {/* Show users ONLY after register */}
      {users.length > 0 && (
        <>
          <h2>Registered Users</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;