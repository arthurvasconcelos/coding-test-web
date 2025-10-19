import type { CompaniesApiJsonResponse } from "../../types";

export const fetchData = async () => {
  const responseStream = await fetch("/api/companies");
  const response: CompaniesApiJsonResponse = await responseStream.json();
  return response.data;
};