import { FormContainer, FormStyle } from "./FormStyle";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Input, TextArea } from "../../atoms/index";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isVerified, setVerified] = useState(false);

  const onChange = (value: string | null) => {
    if (value) {
      setVerified(true);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && isVerified) {
      emailjs
        .sendForm(
          "service_hfm4khh",
          "template_btuiypg",
          form.current,
          "IA7G5gIy_UJpsjn2l"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Su mensaje ha sido enviado");
          },
          (error) => {
            console.log(error.text);
            alert("Lo sentimos, ha habido un error. Vuelva a intentarlo");
          }
        );
    } else {
      alert("Por favor, verifique el reCAPTCHA antes de enviar el formulario.");
    }
  };

  return (
    <>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <FormContainer>
          <Input type="text" name="user_name" placeholder="Nombre | Empresa" />
          <Input type="email" name="user_email" placeholder="Email" />
          <TextArea name="message" placeholder="Escribe aquí tu mensaje." />
        </FormContainer>
        <ReCAPTCHA
          sitekey="6Le-tzsmAAAAAGQGJ0bo8crVJWPNtyPwJRgwm9QL"
          onChange={onChange}
        />
        <Button type="submit" label="Enviar" />
      </FormStyle>
    </>
  );
};

export default Form;

