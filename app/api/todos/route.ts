import prisma from "@/lib/prisma";
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'


export async function GET(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response('Session not found', {
      status: 401
    })
  }

  try {
    const data = await prisma.user.findMany({
      where: { email: "nguyenvinhat@gmail.com" }
      // ,orderBy: { createdAt: 'asc' }
    })

    return new Response(JSON.stringify(data), { status: 201 })
  } catch (error) {
    return new Response('Failed to fetch', { status: 500 })
  }
}

// export async function POST(req: Request) {
//   const session = await getServerSession(authOptions)

//   if (!session) {
//     return new Response('Session not found', {
//       status: 401
//     })
//   }

//   const { title, importance } = await req.json()
//   try {
//     const data = await prisma.todo.create({
//       data: {
//         title,
//         importance,
//         userId: String(session?.user?.email)
        
//       }
//     })

//     return new Response(JSON.stringify(data), { status: 201 })
//   } catch (error) {
//     return new Response('Failed to create todo', { status: 500 })
//   }
// }
