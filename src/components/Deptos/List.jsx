import apartments from "./data/apartments.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./ListStyled";

export const List = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <s.Container>
      {apartments.map((apartment) => (
        <s.Card
          id="explorar"
          key={apartment.id}
          onMouseEnter={() => setHoveredCard(apartment.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <s.Image src={apartment.image} alt={apartment.title} />
          <s.Info className={hoveredCard === apartment.id ? "show" : ""}>
            <s.Rating rating={apartment.rating} />
            <s.Description>{apartment.description}</s.Description>
            <s.Price>{apartment.price}</s.Price>
            <s.BookButton
              onClick={() => navigate(`/apartment/${apartment.id}`)}
            >
              Ver más
            </s.BookButton>
          </s.Info>
          <s.Title>{apartment.title}</s.Title>
        </s.Card>
      ))}
    </s.Container>
  );
};
