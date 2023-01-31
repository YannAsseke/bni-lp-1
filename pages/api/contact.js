import {google} from "googleapis";



export default async (req, res) => {
   

   console.log(req.body)

   if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' })
  }

  const { name, email, number,reason, text } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            //keyFile: "volkswagen-landing-page-975fe0259781.json",
            
           client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })

    const sheets = google.sheets({
        auth,
        version: 'v4'
    });

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:D1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [name, email, number,reason, text]
            ]
        }
    });

    return res.status(201).json({
        
        
    })
}catch (e) {
   // return res.status(e.code).send({message: e.message})
    console.log(e)
    res.status(500).send("Error proccessing charge");
}


  
};
