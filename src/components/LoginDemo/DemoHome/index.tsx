import React from "react";

import DemoCard from "../DemoCard";
import styled from "@emotion/styled";
import DemoButton from '../DemoButton/index';

const StyledHomeCard = styled(DemoCard)`
  width: 90%;
  max-width: 40rem;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;
`;

const DemoHome: React.FC<any> = ({ onLogout }) => {
  return (
    <StyledHomeCard>
      <h1>Welcome back!</h1>
      <DemoButton onClick={onLogout}>Logout</DemoButton>
    </StyledHomeCard>
  );
};

export default DemoHome;
