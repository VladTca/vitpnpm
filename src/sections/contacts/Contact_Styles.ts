import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Contacts = styled.section`
  position: relative;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;

  font-family: Poppins, sans-serif;
  font-size: 12px;

  font-weight: 400;
  color: ${theme.colors.font};
  letter-spacing: 0.05px;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
  ${font};
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 7px 15px;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};

  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.font};
  letter-spacing: 0.05px;

  resize: none;
  height: 155px;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

export const S = {
  Contacts,
  Form,
  Field,
  Description,
  ErrorMessage,
  Textarea,
};
