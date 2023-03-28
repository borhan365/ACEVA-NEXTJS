import { google } from 'googleapis';
import credentials from './credentials.json';


async function authenticate() {
  const auth = await google.auth.getClient({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

async function handler(req, res) {
  await console.log('-------------------hello')
  if (req.method === 'POST') {
    const { name, email_address, phone_number, company_name, plan, date } = req.body;
    console.log(name, email_address, phone_number, company_name, plan, date);

    const sheets = await authenticate();
    console.log('---------------',sheets)
  const result = await sheets.spreadsheets.values.append({
      spreadsheetId: "1L-bH0EA-YGLx9HP4NPdREw4ZnvfSln6jR1P9Xi_tLFM",
      range: 'Sheet1!A2:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email_address, phone_number, company_name, plan, date]],
      },
    });
    
    return res.status(201).json({ message: 'It works!' });
  }

 return  res.status(200).json({ message: 'Hey!' });
}

export default handler;