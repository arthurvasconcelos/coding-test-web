import type { NextApiRequest, NextApiResponse } from "next";
import mockData from '../../mock/db/data.json';
import type { CompaniesApiJsonResponse } from "../../types";

const data: CompaniesApiJsonResponse = mockData;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompaniesApiJsonResponse>
) {
  res.status(200).json(data);
}
