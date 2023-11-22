// export async function GET() {
  import OpenAI from "openai";

  const openai = new OpenAI({
    apiKey: `${process.env.OPEN_AI}`,
  });

  // async function main() {
  //   const embedding = await openai.embeddings.create({
  //     model: "davinci-002",
  //     input: "The quick brown fox jumped over the lazy dog",
  //   });
    

  //   console.log(embedding);
  // }

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Where is Vietnam." }],
      model: "text-davinci-002",
    });
  
    console.log(completion.choices[0]);
  }
  

  main();
//   const data = await res.json()
 
//   return Response.json({ data })
// }

