import styled from "styled-components";

export const CountryItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100px;
  padding: 8px 24px;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;
  font-size: 20px;

  @media (width < 1025px) {
    height: 80px;
    font-size: 16px;
    gap: 16px;
  }

  @media (width < 769px) {
    height: 70px;
    padding: 8px 16px;
    font-size: 14px;
    gap: 12px;
  }
`;

export const Column = styled.div`
  flex: 1;
  overflow: scroll;
  max-height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  &:first-child {
    flex: 0.4;
  }

  &:last-child {
    overflow: hidden;
  }
`;
