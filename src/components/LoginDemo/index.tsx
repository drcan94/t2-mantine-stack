import React, { useEffect, useReducer, useState } from "react";
import DemoButton from "./DemoButton";
import styled from "@emotion/styled";
import { emailReducer } from "./emailReducer";
import { passwordReducer } from "./passwordReducer";
import { Actions, FormControl, FormInput, FormLabel } from "./styles";
import { StyledCard } from "../UI/CustomCard/styles";
import { type MantineTheme, useMantineTheme } from "@mantine/core";

const StyledLoginCard = styled(StyledCard)<{ theme: MantineTheme }>`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  & input {
    color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.orange[9]
        : theme.colors.gray[8]};
  }
`;

const LoginDemo: React.FC<{
  onLogin: (email: string, password: string) => void;
}> = ({ onLogin }) => {
  const theme = useMantineTheme();

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        email.value.includes("@") && password.value.trim().length >= 6
      );
    }, 200);

    return () => clearTimeout(identifier);
  }, [email.value, password.value]);

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "SET_EMAIL_VALIDITY",
      isValid: email.value.includes("@"),
    });
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({
      type: "SET_EMAIL",
      value: event.target.value,
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "SET_PASSWORD_VALIDITY",
      isValid: password.value.trim().length >= 6,
    });
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchPassword({
      type: "SET_PASSWORD",
      value: event.target.value,
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("password", password.value);

      // this is the old way of doing it by maximilian
      onLogin(email.value, password.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLoginCard theme={theme}>
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel theme={theme} htmlFor="email">
            E-Mail
          </FormLabel>
          <FormInput
            isValid={email.isValid}
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </FormControl>
        <FormControl>
          <FormLabel theme={theme} htmlFor="password">
            Password
          </FormLabel>
          <FormInput
            isValid={password.isValid}
            type="password"
            id="password"
            value={password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </FormControl>
        <Actions>
          <DemoButton type="submit" disabled={!formIsValid}>
            Login
          </DemoButton>
        </Actions>
      </form>
    </StyledLoginCard>
  );
};

export default LoginDemo;
