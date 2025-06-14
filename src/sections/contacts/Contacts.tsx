import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {S} from "./Contact_Styles";
import {useTranslation} from "react-i18next";
import type {TFunction} from "i18next";

const validationSchema = (t: TFunction) =>
  Yup.object({
    user_name: Yup.string().required(t("nameRequired", "Name is required")),
    email: Yup.string()
      .email(t("invalidEmail", "Invalid email address"))
      .required(t("emailRequired", "Email is required")),
    subject: Yup.string().required(t("subjectRequired", "Subject is required")),
    message: Yup.string().required(t("messageRequired", "Message is required")),
  });

export const Contacts: React.FC = () => {
  const { t } = useTranslation();
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
      alert(t('successsend'));
      resetForm();
    } catch (error) {
      console.error(t('failedsend'), error);
      alert(t('failedMessage'));
    }
  };

  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>{t("contacts")}</SectionTitle>
        <S.Description>{t("contactDescription")}</S.Description>
        <Formik
          initialValues={{
            user_name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema(t)}
          onSubmit={sendEmail}
        >
          {({ isSubmitting, handleSubmit }) => (
            <S.Form onSubmit={handleSubmit}>
              <Field
                as={S.Field}
                type="text"
                name="user_name"
                placeholder={t("name")}
              />
              <ErrorMessage name="user_name" component={S.ErrorMessage} />

              <Field
                as={S.Field}
                type="email"
                name="email"
                placeholder={t("email")}
              />
              <ErrorMessage name="email" component={S.ErrorMessage} />

              <Field
                as={S.Field}
                type="text"
                name="subject"
                placeholder={t("subject")}
              />
              <ErrorMessage name="subject" component={S.ErrorMessage} />

              <Field
                as={S.Textarea}
                name="message"
                placeholder={t("message")}
              />
              <ErrorMessage name="message" component={S.ErrorMessage} />

              <Button
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: "16px" }}
              >
                {t("sendMessage")}
              </Button>
            </S.Form>
          )}
        </Formik>
      </Container>
    </S.Contacts>
  );
};
