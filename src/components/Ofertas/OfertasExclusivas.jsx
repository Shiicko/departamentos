import * as s from "./OfertasExclusivasStyled";
import ofertas from "../Deptos/data/ofertas.json";

const OfertasExclusivas = () => {
  return (
    <s.Container id="ofertas-exclusivas">
      <s.Header>
        <h2>Ofertas Exclusivas</h2>
        <p>
          Descubre nuestras ofertas especiales disponibles solo por tiempo
          limitado.
        </p>
      </s.Header>
      <s.OfertasGrid>
        {ofertas.map((oferta) => (
          <s.OfertaCard key={oferta.id}>
            <s.Image src={oferta.image} alt={oferta.title} />
            <s.CardContent>
              <h3>{oferta.title}</h3>
              <p>{oferta.description}</p>
              <s.Price>
                <span className="original-price">${oferta.originalPrice}</span>
                <span className="discounted-price">
                  ${oferta.discountedPrice}
                </span>
              </s.Price>
              <s.Button>Ver Más</s.Button>
            </s.CardContent>
          </s.OfertaCard>
        ))}
      </s.OfertasGrid>
    </s.Container>
  );
};

export default OfertasExclusivas;
