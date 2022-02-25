import fs from 'fs';
import readline from 'readline';
import { google } from 'googleapis'
import { join } from 'path';

// If modifying these scopes, delete token.json.
const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/spreadsheets'
];

const ROOT_DIR = process.env.PWD || '';
const token_file = join(ROOT_DIR, 'tmp', 'token.json');
const credentials_file = join(ROOT_DIR, 'credentials.json');

export async function auth () {
  // Load client secrets from a local file.
  return new Promise((resolve, reject) => {

    if (process.env.API_CREDENTIALS) {
      authorize(JSON.parse(process.env.API_CREDENTIALS), (auth: any) => {
        resolve(auth);
      });
      return;
    }

    fs.readFile(credentials_file, (err, content) => {
      if (err) reject('Error loading client secret file:');
      // Authorize a client with credentials, then call the Google Sheets API.
      authorize(JSON.parse(content.toString()), (auth: any) => {
        resolve(auth);
      });
    });
  });
}
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials: {installed: {
  client_secret: any,
  client_id: any,
  redirect_uris: string[]
}}, callback: any) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;

  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  if (process.env.GOOGLE_TOKEN) {
    const credential:any = process.env.GOOGLE_TOKEN;
    oAuth2Client.setCredentials(credential);
    callback(oAuth2Client);
    return;
  }

  // Check if we have previously stored a token.
  fs.readFile(token_file, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token.toString()));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client: any, callback: any) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err: any, token: string) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(token_file, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', token_file);
      });
      callback(oAuth2Client);
    });
  });
}
