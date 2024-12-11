import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding-inline: 24px;
  font-size: 24px;
  gap: 24px;

  @media (width < 1025px) {
    font-size: 16px;
    gap: 16px;
  }

  @media (width < 769px) {
    padding-inline: 16px;
    font-size: 14px;
    gap: 12px;
  }
`;

export const HeaderColumn = styled.p`
  flex: 1;

  &:first-child {
    flex: 0.4;
  }
`;
