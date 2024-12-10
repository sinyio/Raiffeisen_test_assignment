import { FC } from "react";
import { Flex } from "vienna-ui";
import { CountryListProps } from "../types";
import { CountryItem } from "@/modules/CountryItem";
import { Header, HeaderColumn } from "./styled";

export const CountryList: FC<CountryListProps> = ({ countryList }) => {
  return (
    <Flex
      direction="column"
      gap={{ base: "s2", s: "s3", m: "s4" }}
      mt={{ base: "s2", s: "s4", m: "s8" }}
    >
      <Header>
        <HeaderColumn>Id</HeaderColumn>
        <HeaderColumn>Название</HeaderColumn>
        <HeaderColumn>Регион</HeaderColumn>
        <HeaderColumn>Население</HeaderColumn>
        <HeaderColumn>Флаг</HeaderColumn>
      </Header>
      {countryList.map((country) => (
        <CountryItem
          key={country.id}
          id={country.id}
          countryName={country.countryName}
          region={country.region}
          population={country.population}
          flag={country.flag}
        />
      ))}
    </Flex>
  );
};
