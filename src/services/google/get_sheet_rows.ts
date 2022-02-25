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
      this.IMAGEM = imagem;
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

// export const getCorretores = async (): Promise<Corretor[]> => {
//   const result = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetid}?key=${apikey}&includeGridData=true`);
//   const corretores: Corretor[] = [];

//   if (result.ok) {
//     const { sheets } = await result.json() as ResultInterface;

//     sheets.forEach(sheet => {
//       if (sheet.properties.title === 'corretores') {
//         sheet.data.forEach(data => {
//           data.rowData.forEach(row => {
//             const corretor = new Corretor();
//             let hasDataInLine = false;
//             row.values.map((valor, key) => {
//               if (valor.formattedValue){
//                 corretor[Corretor.fields[key]] = valor.formattedValue;
//                 hasDataInLine = true;
//               }
//             });

//             if (hasDataInLine) {
//               corretores.push(corretor);
//             }
//           })
//         })
//       }
//     });
//   } else {
//     console.log(result.status, result.statusText);
//   }

//   return corretores;
// }
