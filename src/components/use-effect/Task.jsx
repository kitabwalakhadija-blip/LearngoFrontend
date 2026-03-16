import { useState, useEffect } from "react";
function Task() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch data");
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
          <br />
          {user.Phone}
          <br />
          {user.Website}
        </p>
      ))}
    </div>
  );
}
export default Task;
