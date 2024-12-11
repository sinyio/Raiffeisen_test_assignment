import axios from "axios";
import { apiKey } from "./config";

const countriesControllerApi = axios.create({
  baseURL: apiKey,
});

export const getCountries = async () => {
  try {
    const response = await countriesControllerApi.get("/all");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Ошибка при получении данных");
    }
  }
};

export const getCountriesByName = async (name: string) => {
  try {
    const response = await countriesControllerApi.get(`/name/${name}`);
    if (response.status === 404) {
      throw new Error("Страна не найдена");
    }
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Ошибка при получении данных");
    }
  }
};
