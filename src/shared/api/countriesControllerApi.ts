import axios from "axios";
import { apiKey } from "./config";

const countriesControllerApi = axios.create({
  baseURL: apiKey,
});

countriesControllerApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error fetching data:", error);
  }
);

export const getCountries = async () => {
  const response = await countriesControllerApi.get("/all");
  return response.data;
};

export const getCountriesByName = async (name: string) => {
  const response = await countriesControllerApi.get(`/name/${name}`);
  return response.data;
};
