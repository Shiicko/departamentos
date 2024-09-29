import { useState } from "react";
import * as s from "./PreciosStyled";
import preciosData from "./precios.json";
import { useEffect } from "react";

export const Precios = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] =
    useState("Ciudad de México");
  const [preciosCiudad, setPreciosCiudad] = useState({});

  useEffect(() => {
    setPreciosCiudad(preciosData[ciudadSeleccionada] || {});
  }, [ciudadSeleccionada]);

  const handleCiudadClick = (ciudad) => {
    setCiudadSeleccionada(ciudad);
  };

  const mesesColumna1 = Object.keys(preciosCiudad).slice(0, 6);
  const mesesColumna2 = Object.keys(preciosCiudad).slice(6, 12);

  return (
    <s.Container id="Months">
      <s.Titulo>
        Descubre el mejor momento para reservar tu próxima estancia
      </s.Titulo>
      <s.SelectContainer>
        {Object.keys(preciosData).map((ciudad) => (
          <s.Opcion
            key={ciudad}
            onClick={() => handleCiudadClick(ciudad)}
            isSelected={ciudad === ciudadSeleccionada}
          >
            {ciudad}
          </s.Opcion>
        ))}
      </s.SelectContainer>
      <s.PreciosContainer>
        <s.Columna>
          {mesesColumna1.map((mes) => (
            <s.Fila key={mes}>
              <s.Mes>{mes.charAt(0).toUpperCase() + mes.slice(1)}</s.Mes>
              <s.Precio>{preciosCiudad[mes]}</s.Precio>
            </s.Fila>
          ))}
        </s.Columna>
        <s.Columna>
          {mesesColumna2.map((mes) => (
            <s.Fila key={mes}>
              <s.Mes>{mes.charAt(0).toUpperCase() + mes.slice(1)}</s.Mes>
              <s.Precio>{preciosCiudad[mes]}</s.Precio>
            </s.Fila>
          ))}
        </s.Columna>
      </s.PreciosContainer>
    </s.Container>
  );
};
