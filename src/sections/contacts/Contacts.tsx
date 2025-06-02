import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {S} from "./Contact_Styles";
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export const Contacts: React.FC = () => {
    const {t}=useTranslation();
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
        <SectionTitle>{t('contacts')}</SectionTitle>
        <S.Description>
            {t('contactDescription')}
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
                placeholder={t('name')}
              />
              <ErrorMessage name="user_name" component={S.ErrorMessage} />

              <Field
                as={S.Field}
                type="email"
                name="email"
                placeholder={t('email')}
              />
              <ErrorMessage name="email" component={S.ErrorMessage} />

              <Field
                as={S.Field}
                type="text"
                name="subject"
                placeholder={t('subject')}
              />
              <ErrorMessage name="subject" component={S.ErrorMessage} />

              <Field as={S.Textarea} name="message" placeholder={t('message')} />
              <ErrorMessage name="message" component={S.ErrorMessage} />

              <Button
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: "16px" }}
              >
                  {t('sendMessage')}
              </Button>
            </S.Form>
          )}
        </Formik>
      </Container>
    </S.Contacts>
  );
};
