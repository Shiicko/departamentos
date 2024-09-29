import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  height: 350px;
  position: relative;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  ${Card}:hover & {
    opacity: 0.7;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 1;
  transition: background 0.3s ease;
  ${Card}:hover & {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const BookButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #0056b3;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
`;

export const Rating = styled.div`
  font-size: 1.2rem;
  color: #ffd700;
  margin-bottom: 10px;

  /* Estrellas según el rating */
  &:before {
    content: "${(props) => "⭐".repeat(props.rating)}";
  }
`;
