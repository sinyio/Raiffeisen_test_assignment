import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding-inline: 24px;
  font-size: 24px;
  gap: 16px;

  @media (width < 1025px) {
    font-size: 16px;
    gap: 12px;
  }

  @media (width < 769px) {
    padding-inline: 16px;
    font-size: 14px;
    gap: 8px;
  }
`;

export const HeaderColumn = styled.p`
  color: #000;
  flex: 1;

  &:nth-child(1) {
    flex: 0.4;
  }
`;
