import styled from "styled-components";
import { useAuth } from "../../../hooks";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../ui/button";

const Navbar = styled.nav`
  background-color: transparent;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  left: 0;
  right: 0;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const NavbarHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header>
      <Navbar>
        <Logo>Logo</Logo>
        <NavLinks>
          <NavItem>
            <NavLink href="/store">Store</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Service</NavLink>
          </NavItem>
        </NavLinks>
        <div>
          {!user ? (
            <MainButton>
              <Link to={"/signin"}>Login</Link>
            </MainButton>
          ) : (
            <MainButton
              onClick={() => {
                logout();
                navigate("/signin");
              }}
            >
              Logout
            </MainButton>
          )}
        </div>
      </Navbar>
    </header>
  );
};

export default NavbarHeader;
