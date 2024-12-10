import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-inline: auto;
  padding: 48px 24px;

  @media (width < 1025px) {
    gap: 24px;
    padding: 36px 16px;
  }

  @media (width < 769px) {
    gap: 16px;
    padding: 24px 8px;
  }
`;

export const Layout = styled.div`
  height: 100vh;
`;
