import { google } from 'googleapis';

const sheets = google.sheets('v4');

export const get_sheet_rows = async (authClient: any, sheetid: string) => {

  const sheetValues = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetid,
    auth: authClient,
    range: 'A:F'
  });

  class Column {
    ID: number;
    TITULO: string;
    IMAGEM: string;
    LINK: string;
    REQUERENTE: string;
    REQUERIDO: string;

    constructor(
      id: number, 
      titulo: string, 
      imagem: string,
      link: string, 
      requerente: string, 
      requerido: string) {
      this.ID = id;
      this.TITULO = titulo;
      this.IMAGEM = imagem? imagem: 'https://dummyimage.com/300x300/000/fff&text=Sem+imagem';
      this.LINK = link;
      this.REQUERENTE = requerente;
      this.REQUERIDO = requerido
    }
  };

  let columns: Column[] = [];

  sheetValues.data.values?.forEach((line, i) => {
    if (i > 0) {
      columns.push(new Column(
        line[0],
        line[1] || '',
        line[2] || '',
        line[3] || '',
        line[4] || '',
        line[5] || ''
      ));
    }
  })

  return columns;
}
