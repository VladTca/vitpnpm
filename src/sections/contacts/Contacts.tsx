import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {S} from "./Contact_Styles";

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export const Contacts: React.FC = () => {
  const sendEmail = async (
    values: {
      user_name: string;
      email: string;
      subject: string;
      message: string;
    },
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_KEY_EMAIL_SERVICEID || "#",
        import.meta.env.VITE_KEY_EMAIL_TEMPLATEID || "#",
        values,
        { publicKey: import.meta.env.VITE_KEY_EMAIL_EMAILJS || "#" },
      );
      alert("Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Description>
          You can contact me by simply filling out the form and by pressing the
          Send button - and I will receive your message to my email.
        </S.Description>
        <Formik
          initialValues={{
            user_name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting, handleSubmit }) => (
            <S.Form onSubmit={handleSubmit}>
              <Field
                as={S.Field}
                type="text"
                name="user_name"
                placeholder="Name"
              />
              <ErrorMessage name="user_name" component={S.ErrorMessage} />

              <Field
                as={S.Field}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component={S.ErrorMessage} />

              <Field
                as={S.Field}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <ErrorMessage name="subject" component={S.ErrorMessage} />

              <Field as={S.Textarea} name="message" placeholder="Message" />
              <ErrorMessage name="message" component={S.ErrorMessage} />

              <Button
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: "16px" }}
              >
                Send message
              </Button>
            </S.Form>
          )}
        </Formik>
      </Container>
    </S.Contacts>
  );
};
