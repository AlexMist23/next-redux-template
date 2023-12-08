/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { templateFetch } from "./templateFetch";

export const setTemplateAsync = createAppAsyncThunk(
  "currentWeather/templateFetch",
  async (coord: { lat: number; lon: number }) => {
    const response = await templateFetch(coord);
    return response.data;
  }
);
