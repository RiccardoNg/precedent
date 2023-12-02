

import { sql } from "@vercel/postgres";
// import { PrismaClient } from '@prisma/client';


export default async function Cart() {
  const { rows } = await sql`SELECT * from public."User"`;
  const user = await prisma.user.findUnique({
    where: { id: `asd-asd` },
  });
  const users = await prisma.user.findMany();

  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <h1>Cart - Using @vercel/postgres</h1>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.email}
        </div>
      ))}
      
      <h1>Cart - Using prisma find unique user id = 'asd-asd'</h1>
      <p>{user.id} - {user.email}</p>

      <h1>Cart - Using prisma find all users</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.id} - {user.email}
        </div>
      ))}

    </div>
  );
}

