import { Button } from "../../atoms";
import Input from "../../atoms/input/Input";
import Textarea from "../../atoms/textarea/Textarea";
import { FormContainer, FormStyle } from "./FormStyle";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
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
    }
  };
  return (
    <>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <FormContainer>
          <Input type="text" name="user_name" placeholder="Nombre" />
          <Input type="email" name="user_email" placeholder="Email" />
          <Textarea name="message" placeholder={"Escribe aquí tu mensaje."} />
        </FormContainer>
        <Button type="submit" label={"Enviar"} />
      </FormStyle>
    </>
  );
};
export default Form;
