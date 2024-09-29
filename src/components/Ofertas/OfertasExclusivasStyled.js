import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  background: #f8f9fa;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

export const OfertasGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const OfertaCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  position: relative;

  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const Price = styled.div`
  margin: 10px 0;

  .original-price {
    text-decoration: line-through;
    color: #999;
    margin-right: 10px;
  }

  .discounted-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #e74c3c;
  }
`;

export const Button = styled.button`
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
