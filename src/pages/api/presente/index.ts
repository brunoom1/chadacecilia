// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { get_sheet_rows } from '../../../services/google/get_sheet_rows';
import { auth } from '../../../services/google/authorization';
import { spreadsheetId } from "./../../../config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const authResult = await auth();
  const columns = await get_sheet_rows(authResult, spreadsheetId);
  
  res.status(200).json(columns);
}
