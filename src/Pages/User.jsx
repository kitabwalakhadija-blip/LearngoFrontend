import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <br></br>
      <h1>full stack User App</h1>
      <UserForm fetchUsers={fetchUsers} />

      <ul>
        {users.map((user) => {
          <li key={user.id}>
            {user.sname},{user.qual},{user.perc}
          </li>
        })}
      </ul>
    </div>
  );
};
export default User;
