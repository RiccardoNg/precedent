export async function GET() {
  const res = await fetch('https://get-meme-lucloi.p.rapidapi.com/api/posts', {
    headers: {
      'X-RapidAPI-Key': 'L5kiZdYz7Pmsh5VJpaWgy7hc8LSRp1YkeK9jsndroxpg3AQsBN',
      'X-RapidAPI-Host': 'get-meme-lucloi.p.rapidapi.com'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}

