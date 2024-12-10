export interface CountryItemProps {
  id: number;
  countryName: string;
  region: string;
  population: string;
  flag: string;
}

export interface CountryItem extends CountryItemProps {}
