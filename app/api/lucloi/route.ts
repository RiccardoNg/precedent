export async function GET() {
  const res = await fetch('https://get-meme-lucloi.p.rapidapi.com/api/posts', {
    headers: {
      'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
      'X-RapidAPI-Host': 'get-meme-lucloi.p.rapidapi.com'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}

