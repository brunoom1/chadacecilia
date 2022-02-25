import { google } from 'googleapis';

const sheets = google.sheets('v4');

export async function add_sheet_row (
  authClient: any, 
  rowNumber: number, 
  requerido: boolean = true,
  requirente: string,
  sheetId: string
  ) {

  const range = `presentes!E${rowNumber}:F${rowNumber}`;

  if (rowNumber <= 1) {
    throw new Error('Valor de linha inválido');
  }

  const request = {
    // The ID of the spreadsheet to update.
    spreadsheetId: sheetId,  
    valueInputOption: 'RAW',
    range,
    requestBody: {
      range,
      values: [
        [requirente, requerido]
      ]
    },
    auth: authClient,
  };

  const response = (await sheets.spreadsheets.values.update(request)).data;

  return response
}