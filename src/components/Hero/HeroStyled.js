import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/Playa.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  margin: 8px;
`;

export const HeroContent = styled.div`
  max-width: 600px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ffe78d;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 30px;
`;

export const CtaButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;
