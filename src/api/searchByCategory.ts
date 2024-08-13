import axios, { AxiosResponse } from 'axios';
import { IPeople, People } from "../types/SWApi";

const API_URL = 'https://swapi.dev/api';
const PEOPLE_API_URL = `${API_URL}/people/`


export const fetchData = async (text:string) => {
    const requestUrlWithFilter = `${PEOPLE_API_URL}?search=${text}`;

    try {
        const response: AxiosResponse<[IPeople]> = await axios.get(requestUrlWithFilter);
        console.log('res: ', response.data)
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
};

  export const fetchCategoryData = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch data:`, error);
      return null;
    }
  };