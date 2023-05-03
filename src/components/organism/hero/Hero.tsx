import Title from "../../atoms/title/Title";
import { HeroStyle, LeftContainer, RightContainer } from "./HeroStyle";
import hero from "../../../assets/hero.gif";
import { Button } from "../../atoms/index";
import handleDownloadPdf from "../../../hooks/DownloadPdf";

function Hero() {
  return (
    <HeroStyle>
      <LeftContainer>
        <Title
          title1={"¡Hola! Soy "}
          highligth={"Galit Bixio,"}
          hlcolor={"var(--highlight-color)"}
          title2={"fullstack developer."}
        />
        <p>
          Gracias
          a mi background creativo, gran pasión por el diseño UX|UI y mi experiencia previa en marketing digital, he adquirido un fuerte enfoque
          en comunicación y orientación al cliente. 
          <br />
          Soy curiosa y me motiva estar en constante aprendizaje. Me enorgullece mi
          capacidad para colaborar de manera efectiva y crear soluciones
          digitales innovadoras que satisfagan las necesidades del cliente.
        </p>
        <Button onClick={handleDownloadPdf} label={"Descargar CV"}/>
        
      </LeftContainer>
      <RightContainer>
        <img src={hero} />
      </RightContainer>
    </HeroStyle>
  );
}

export default Hero;
