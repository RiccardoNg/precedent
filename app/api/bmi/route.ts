export async function GET() {
  
  const res = await fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83', {
    headers: {
      // 'X-RapidAPI-Key': 'L5kiZdYz7Pmsh5VJpaWgy7hc8LSRp1YkeK9jsndroxpg3AQsBN',
      'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
      'X-RapidAPI-Host': `${process.env.X_RapidAPI_Host}`
      
      // 'body-mass-index-bmi-calculator.p.rapidapi.com'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}

