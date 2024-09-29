import * as s from "./HeroStyled";

export const Hero = () => {
  return (
    <s.HeroContainer>
      <s.HeroContent>
        <s.Title>Encuentra Tu Nuevo Hogar</s.Title>
        <s.Subtitle>
          Descubre los mejores apartamentos en las mejores zonas
        </s.Subtitle>
        <s.CtaButton href="#explorar">Explorar Ahora</s.CtaButton>
      </s.HeroContent>
    </s.HeroContainer>
  );
};
