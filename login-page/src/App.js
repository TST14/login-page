import { useState } from "react";

function App() {
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements["name"].value;
    const password = e.target.elements["password"].value;
    if (name === "user" && password === "password") {
      setSuccess(true);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      {isSuccess ? (
        <p>Welcome, user!</p>
      ) : (
        <>
          {isError ? <p>Invalid username or password</p> : null}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Username:</label>
              <input required type="text" id="name" placeholder="username" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                required
                type="password"
                id="password"
                placeholder="password"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
