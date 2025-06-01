import React, {useRef} from "react";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {S} from "./Contact_Styles";
import emailjs from "@emailjs/browser";

//TODO: После отправки написать алерт если успешно отправлено

export const Contacts: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm("service_zv37svi", "template_mbc2t2h", form.current, {
        publicKey: import.meta.env.VITE_KEY_EMAIL_EMAILJS || "#",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Description>You can contact me by simply filling out the form and by pressing the Send button - and I will receive your message to my email.</S.Description>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required name={"user_name"} placeholder={"name"} />
          <S.Field required name={"email"} placeholder={"email"} />
          <S.Field required placeholder={"subject"} name={"subject"} />
          <S.Field
            required
            name={"message"}
            placeholder={"message"}
            as={"textarea"}
          />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
