import { FC, useState, useMemo } from "react";
import { PageLayout } from "@layouts/PageLayout";
import { SearchBar } from "@modules/SearchBar";
import { useCountryList, CountryList } from "@modules/CountryList";
import { Loader } from "@components/Loader";
import { useDebounce } from "@hooks/useDobunce";
import { Sort } from "@modules/Sort";
import { H1, H2 } from "vienna-ui";

export const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isError, isLoading, isSuccess } =
    useCountryList(debouncedValue);

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  const sortedCountryList = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      if (sortOrder === "ascending") return a.population - b.population;
      if (sortOrder === "descending") return b.population - a.population;
      return 0;
    });
  }, [data, sortOrder]);

  return (
    <PageLayout>
      <H1 size={{ base: "l", s: "xl" }}>Список стран</H1>
      <SearchBar onSearch={setSearchValue} />
      <Sort onChange={handleSortChange} />
      {isLoading && <Loader />}
      {isError && <H2 size={{ base: "xs", s: "s" }}>Страны не найдены</H2>}
      {isSuccess && sortedCountryList.length > 0 && (
        <CountryList countryList={sortedCountryList} />
      )}
    </PageLayout>
  );
};
