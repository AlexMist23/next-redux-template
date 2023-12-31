import { type Forecast5Data } from "./templateSlice";

export const templateFetch = async (coord: {
  lon: number;
  lat: number;
}): Promise<{ data: Forecast5Data }> => {
  const response = await fetch("/api/forecast5", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ coord }),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
  const result = await response.json();
  return result;
};
