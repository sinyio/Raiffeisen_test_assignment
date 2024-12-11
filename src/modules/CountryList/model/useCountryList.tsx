import { getCountries, getCountriesByName } from "@api/countriesControllerApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useCountryList = (name: string) => {
  const [wrongPrefix, setWrongPrefix] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["Countries", name],
    queryFn: name ? () => getCountriesByName(name) : () => getCountries(),
    retry: 0,
    enabled: !wrongPrefix || !name.startsWith(wrongPrefix),
    select: (data) => {
      if (!data) return null;
      return data.map((country, index) => ({
        id: index + 1,
        countryName: country.name.common,
        region: country.region,
        population: country.population,
      }));
    },
  });

  useEffect(() => {
    if (error) {
      setWrongPrefix(name);
      setIsError(true);
    }
    if (!name.startsWith(wrongPrefix) || isLoading) {
      setIsError(false);
    }
  }, [error, name, isLoading, wrongPrefix]);

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
