import { FC } from "react";
import { CountryItemProps } from "../types";
import { Column, CountryItemContainer } from "./styled";

export const CountryItem: FC<CountryItemProps> = ({
  id,
  countryName,
  region,
  population,
}) => {
  return (
    <CountryItemContainer>
      <Column>{id}</Column>
      <Column>{countryName}</Column>
      <Column>{region}</Column>
      <Column>{population}</Column>
    </CountryItemContainer>
  );
};
