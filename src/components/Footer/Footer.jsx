import * as s from "./FooterStyled";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.IconContainer>
        <s.Icon
          href="https://api.whatsapp.com/send?phone=5493543300701&text=Hola%21%20Hola%20Joel,%20me%20comunico%20para"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </s.Icon>
        <s.Icon
          href="https://www.instagram.com/joel_elias.19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </s.Icon>
        <s.Icon href="mailto:tu-email@ejemplo.com">
          <FaEnvelope size={24} />
        </s.Icon>
      </s.IconContainer>
      <s.LinksContainer>
        <s.Link href="#">Ayuda</s.Link>
        <s.Link href="#">Términos y condiciones</s.Link>
        <s.Link href="#">Información legal</s.Link>
        <s.Link href="#">Aviso de privacidad</s.Link>
      </s.LinksContainer>
    </s.FooterContainer>
  );
};
