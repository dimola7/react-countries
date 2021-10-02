import { Link } from "react-router-dom";
import { Nav } from "../../styles/NavBar.styles";
import { Img } from "../../styles/Image.styles";
import { Logo } from "../../styles/NavBar.styles";
import { LogoutBtn } from "../../styles/Buttons.styles";
import earth from "../../assets/img/earth.svg";

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <Img src={earth} alt="" style={{ width: "30px" }} />
        <h2 style={{ color: "#aaa69d" }}>Countries</h2>
      </Logo>
      <Link to="/">
        <LogoutBtn>Logout</LogoutBtn>
      </Link>
    </Nav>
  );
};

export default NavBar;
