// import prisma from "@/lib/prisma";
// import { NextApiRequest, NextApiResponse } from "next";
// import { hash } from "bcrypt";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { email, password } = await req.json();
//   const exists = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   if (exists) {
//     return NextResponse.json({ error: "User already exists" }, { status: 400 });
//   } else {
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: await hash(password, 10),
//       },
//     });
//     return NextResponse.json(user);
//   }
// }


export async function GET() {
  
  const res = await fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83', {
    headers: {
      // 'X-RapidAPI-Key': 'L5kiZdYz7Pmsh5VJpaWgy7hc8LSRp1YkeK9jsndroxpg3AQsBN',
      'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
      'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}

