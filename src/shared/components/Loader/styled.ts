import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #fff;
  border-top: 10px solid #ffe40a;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
