import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Titulo = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 35px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Opcion = styled.button`
  background-color: ${(props) => (props.isSelected ? "#007bff" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

export const PreciosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Columna = styled.div`
  width: 48%;
`;

export const Fila = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Mes = styled.span`
  font-weight: bold;
  color: #333;
`;

export const Precio = styled.span`
  color: #555;
`;
