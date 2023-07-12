import Logo from "../../assets/images/logo/logo.png";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <img src={Logo} alt="LOGO" />
          Kueentair
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
