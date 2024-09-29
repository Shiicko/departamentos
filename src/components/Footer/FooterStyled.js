import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Icon = styled.a`
  color: #fff;
  transition: color 0.3s;
  &:hover {
    color: #00bfae;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #00bfae;
  }
`;
