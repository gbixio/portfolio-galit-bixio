import { BsLinkedin, AiFillMail } from "react-icons/all";
import Title from "../../atoms/title/Title";
import { ContactStyle, LeftContainer, RightContainer } from "./ContactStyle";
import Form from "../../molecules/form/Form";

function Contact() {
  return (
    <ContactStyle>
      <LeftContainer>
        <Title
          title1={"¡Contáctame!"}
          highligth={""}
          hlcolor={""}
          title2={""}
        />

        <a href="https://www.linkedin.com/in/galit-bixio/">
          <BsLinkedin />
          {" /galit-bixio"}
        </a>

        <a href="mailto:galbixio93@gmail.com">
          <AiFillMail />
          {"  galbixio93@gmail.com"}
        </a>
        <br />
      </LeftContainer>
      <RightContainer>
        <Form />
      </RightContainer>
    </ContactStyle>
  );
}

export default Contact;
