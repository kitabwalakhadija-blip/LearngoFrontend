import Sidebar from "./Sidebar";
import Student from "./Student";
import Producr from "./Producr";
import{useState}from "react";
function MyHeader() {
  const name = "Rahul";
  let a = 5;
  let b = 6;
  let c = a + b;
  let isLoggedin = true;

  const click=()=>{
    alert("Button Clicked")
  };
  
  
 
  // let menus = ["Home", "About", "Service"];
  let names=["Kitkat","Lays","maruti","Novel"];
  let menus = ["Home", "About", "Service", "Contact", "Book My Show"];

  let products = [
    { pname: "Vivo", price: 2000, cat: "Mobile" },
    { pname: "Oppo F23", price: 2500, cat: "Mobile" },
    { pname: "MI", price: 3000, cat: "Mobile" },
    { pname: "Samsung", price: 4000, cat: "Mobile" },
  ];
  return (
    <>
      {/* Menu Section */}
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>

      {/* Products Section */}
      {products.map((products, index) => (
        <Producr
          key={index}
          pname={products.pname}
          price={products.price}
          cat={products.cat}
        />
      ))}
      {isLoggedin ? <h1>Welcome to {name}</h1> : <h1>Please Login</h1>}
      {(a = b ? "Equal Number" : "Not Equal")}
      <p>
        {a}+{b}={c}{" "}
      </p>
      <button onClick={click}>ClickMe</button>
      {/* <Sidebar menu={menus}></Sidebar> */}
      <Sidebar name={names}></Sidebar>

      <Student name="Rahul" age="25"></Student>
      <Student name="Shanu" age="27"></Student>
      {/* <Producr name="Kitkat" Price="20" category="chocolate"></Producr>
      <Producr name="Lays" Price="30" category="Chips"></Producr>
      <Producr name="maruti" Price="20" category="car"></Producr>
      <Producr name="novel" Price="20" category="Books"></Producr> */}
      
    </>
  );
}

export default MyHeader;

 