import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ViewStud = () => {
  const { id } = useParams(); //dynamic params
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) return <h2>Loading....</h2>;

  return (
    <div style={styles.card}>
      <h2>{student.name}</h2>
      <p>Email:{student.email}</p>
      <p>Phone:{student.phone}</p>
      <p>Website:{student.website}</p>
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
export default ViewStud;
