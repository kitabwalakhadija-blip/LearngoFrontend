function Sidebar(props){
    return (
      <>
        <div class="sidebar">
          {/* <a class="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a> */}
        </div>

        <div class="content">
          <h1>Responsive Sidebar</h1>
          <p>Write the content here</p>
          {/* <h2>
            {props.menu.map((menus) => (
              <h3>{menus}</h3>
            ))}
          </h2> */}
          <h4>
            {props.name.map((names)=>(
                <h4>{names}</h4>
            ))}
          </h4>
        </div>
      </>
    );
}
export default Sidebar;