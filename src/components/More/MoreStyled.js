import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-image: url("/oferta1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Arial", sans-serif;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #000;
  padding: 10px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 100px;
  overflow: hidden;
  text-align: center;
`;

export const Price = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 1.2rem;
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
`;

export const Star = styled.span`
  color: ${(props) => (props.filled ? "#FFD700" : "#ccc")};
  font-size: 1.5rem;
`;

export const AdditionalImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  max-width: 600px;
`;

export const AdditionalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const BotonesContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const BookButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  text-decoration: none;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }
`;

export const NotFound = styled.div`
  font-size: 1.5rem;
  color: #fff;
  background: rgba(255, 0, 0, 0.7);
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
`;
