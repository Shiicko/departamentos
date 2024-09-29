import apartments from "../Deptos/data/apartments.json";
import { useParams } from "react-router-dom";
import * as s from "./MoreStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const More = () => {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!apartment) {
    return <s.NotFound>Apartamento no encontrado</s.NotFound>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <s.Star key={i} filled={i < rating}>
          ★
        </s.Star>
      );
    }
    return stars;
  };

  return (
    <s.DetailContainer>
      <s.Title>{apartment.title}</s.Title>
      <s.Image src={apartment.image} alt={apartment.title} />
      <s.Description>{apartment.description}</s.Description>
      <s.AdditionalImagesContainer>
        {apartment.additionalImages.map((img, index) => (
          <s.AdditionalImage
            key={index}
            src={img}
            alt={`Additional ${index + 1}`}
          />
        ))}
      </s.AdditionalImagesContainer>
      <s.Price>{apartment.price}</s.Price>
      <s.Rating>
        {renderStars(apartment.rating)} <span>{apartment.rating} / 5</span>
      </s.Rating>
      <s.BotonesContainer>
        <s.BookButton onClick={() => navigate("/#explorar")}>
          Volver
        </s.BookButton>
        <s.BookButton
          as="a"
          href="https://www.linkedin.com/in/brian-elias-perfil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar
        </s.BookButton>{" "}
      </s.BotonesContainer>
    </s.DetailContainer>
  );
};
