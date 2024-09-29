import * as s from "./HeaderStyled";

export const Header = () => {
  // const handleThemeChange = () => {
  //   console.log("Cambiar tema");
  // };

  return (
    <s.HeaderContainer>
      <s.Logo src="/vuelo.png" alt="Logo" />
      <s.Nav>
        <s.NavItem href="#explorar">Explorar</s.NavItem>
        <s.NavItem href="#ofertas-exclusivas">Ofertas Exclusivas</s.NavItem>
        <s.NavItem href="#Months">Hot months</s.NavItem>
      </s.Nav>
      {/* <s.ThemeToggle onClick={handleThemeChange}>🌙</s.ThemeToggle> */}
    </s.HeaderContainer>
  );
};
