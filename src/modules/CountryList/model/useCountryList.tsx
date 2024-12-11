import { getCountries, getCountriesByName } from "@api/countriesControllerApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useCountryList = (name: string) => {
  const [wrongPrefix, setWrongPrefix] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["Countries", name],
    queryFn: name ? () => getCountriesByName(name) : () => getCountries(),
    retry: (failureCount, error) => {
      if (error.status === 404) {
        return false;
      }
      return failureCount < 3;
    },
    enabled: !wrongPrefix || !name.startsWith(wrongPrefix),
    select: (data) => {
      if (!data || data.length === 0) return null;
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
