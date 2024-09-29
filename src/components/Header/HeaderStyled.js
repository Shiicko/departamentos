import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #002147;

  @media (max-width: 768px) {
    justify-content: center;
    position: relative;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  margin-left: 50px;

  @media (max-width: 768px) {
    height: 40px;
    margin: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: #92bce9;
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  display: none;
  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
