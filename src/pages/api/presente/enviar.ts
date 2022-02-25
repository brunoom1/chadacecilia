import { auth } from "../../../services/google/authorization";
import type { NextApiRequest, NextApiResponse } from 'next'
import { add_sheet_row } from "../../../services/google/add_sheet_row";
import { spreadsheetId } from "./../../../config";

type Data = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {

    const {id, nome} = JSON.parse(req.body);

    if (!id) {
      throw new Error("Field id is required!");
    }

    if (!nome) {
      throw new Error("Field nome is required!");
    }

    const authToken = await auth();
    const result = await add_sheet_row(authToken, id, true, nome, spreadsheetId);

    res.status(200).json(result);
  } catch (err: Error | unknown) {
    if (err){
      res.status(400).json(err);
    }    
  }
}
