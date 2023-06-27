import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

interface Props {
    title: string
};

const ButtonPrimary = ( props : Props) => {
  const title = props;
  
  return(
    <StyledButtonPrimary>{title}</StyledButtonPrimary>
  );
};

const StyledButtonPrimary = styled(Button)`
`;

export default ButtonPrimary;