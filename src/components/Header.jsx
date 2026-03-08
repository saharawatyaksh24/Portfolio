import "./Header.css";
function Header() {

  const name = "Yaksh Saharawat";
  const designation = "Full Stack Developer";

  return (
    <header>

      <h1>{name}</h1>

      <img
        src ="https://images.seeklogo.com/logo-png/35/1/portfolio-plus-banking-software-logo-png_seeklogo-354120.png" 
        alt="profile"
      />

      <h3>{designation}</h3>

    </header>
  );
}

export default Header;