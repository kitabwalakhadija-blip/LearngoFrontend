import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentDetail = () => {
  const [students, setStudents] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      //   setError("Failed to fetch data");
    } finally {
      //   setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Students List</h1>

      {students.map((student) => (
        <div key={student.id} style={styles.card}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
          <Link to={`/viewStud/${student.id}`}>View Details</Link>
        </div>
      ))}
      {/* {students.map((student) => {
        <div key={student.id} style={styles.card}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
          <Link to={`/viewStud/${student.id}`}>View Details</Link>
        </div>;
      })} */}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    borderRadius: "6px",
  },
};
export default StudentDetail;
