import { FC } from "react";
import { CountryItemProps } from "../types";
import { Column, CountryItemContainer, FlagImage } from "./styled";

export const CountryItem: FC<CountryItemProps> = ({
  id,
  countryName,
  region,
  population,
  flag,
}) => {
  return (
    <CountryItemContainer>
      <Column>{id}</Column>
      <Column>{countryName}</Column>
      <Column>{region}</Column>
      <Column>{population}</Column>
      <Column>
        <FlagImage src={flag} alt="Flag" />
      </Column>
    </CountryItemContainer>
  );
};
