function Producr({pname,price,cat}){
    return (
      <div style={styles.card}>
        <h4>{pname}</h4>
        <p>Price:{price}</p>
        <p>Category:{cat}</p>
      </div>
    );
}
const styles = {
  card: {
    border: "1px solid #afefac",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    width:"200px"
  },
};
export default Producr;