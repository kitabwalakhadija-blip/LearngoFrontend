import { useState, useEffect } from "react";
function DataFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      SpeechSynthesisErrorEvent("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? <h2>Loading.....</h2> : ""}
      <h1>UserList</h1>
      {users.map((user) => (
        <p key={user.id}>
          <br />
          {user.name}
          <br />
          {user.email}
        </p>
      ))}
    </div>
  );
}
export default DataFetch;
