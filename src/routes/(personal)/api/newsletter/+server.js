// import { SENDINBLUE_API_KEY } from '$env/static/private';
const SENDINBLUE_API_KEY = process.env.SENDINBLUE_API_KEY

export async function POST ({request}) {
    const {email} = await request.json()

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': SENDINBLUE_API_KEY
        },
        body: JSON.stringify({
            email: email
        })
       }
    
    const response = await fetch('https://api.sendinblue.com/v3/contacts', options)
    return new Response({status: response.status})
}