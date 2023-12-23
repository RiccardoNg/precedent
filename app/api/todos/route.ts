

import { PrismaClient } from '../../../prisma/generated/client'
const prisma = new PrismaClient()
// import prisma from "@/lib/prisma";
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
    const data = await prisma.todo.findMany({
      where: { userId: "clqhpkk980000tkio979dc0y7" }
      // where: {userId: String(session?.user?.email)}
      // ,orderBy: { createdAt: 'asc' }
    })

    return new Response(JSON.stringify(data), { status: 201 })
  } catch (error) {
    return new Response('Failed to fetch', { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response('Session not found', {
      status: 401
    })
  }

  const { title, importance } = await req.json()
  try {
    const data = await prisma.todo.create({
      data: {
        title,
        importance,
        // userId: String(session?.user?.email)
        userId: "clqhpkk980000tkio979dc0y7"
      }
    })

    return new Response(JSON.stringify(data), { status: 201 })
  } catch (error) {
    return new Response('Failed to create todo', { status: 500 })
  }
}
