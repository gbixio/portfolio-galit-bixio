import { BsLinkedin, AiFillMail } from "react-icons/all";
import Title from "../../atoms/title/Title";
import { ContactStyle, Container, BottomContainer } from "./ContactStyle";
import Form from "../../molecules/form/Form";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }
  
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
        <ReCAPTCHA
          sitekey="6Le-tzsmAAAAAGQGJ0bo8crVJWPNtyPwJRgwm9QL"
          onChange={onChange}
        />
        
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
