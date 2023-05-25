import { BsLinkedin, AiFillMail } from "react-icons/all";
import Title from "../../atoms/title/Title";
import { ContactStyle, Container, BottomContainer } from "./ContactStyle";
import Form from "../../molecules/form/Form";

function Contact() {
  return (
    <ContactStyle>
      <Container>
        <Title
          title1={"Vamos más allá de las líneas de código."}
          highligth={" ¡Conectemos!"}
          hlcolor={""}
          title2={""}
        />

        <Form />
        
      </Container>
      <BottomContainer>
        <a href="https://www.linkedin.com/in/galit-bixio/">
          <BsLinkedin />
          {" /galit-bixio"}
        </a>

        <a href="mailto:galbixio93@gmail.com">
          <AiFillMail />
          {"  galbixio93@gmail.com"}
        </a>
      </BottomContainer>
    </ContactStyle>
  );
}

export default Contact;
