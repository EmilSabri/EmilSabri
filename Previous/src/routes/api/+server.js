export async function GET() {

    const respBody = {
        message: 'Hello World'
    }

    return new Response(JSON.stringify(respBody))
}


export async function POST({
    request
}) {

    const req = await request.json()
    console.log('wtf', req)


    const respBody = {
        message: 'Hello World'
    }

    return new Response(JSON.stringify(respBody))
}