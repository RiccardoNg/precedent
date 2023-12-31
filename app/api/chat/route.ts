// // export async function GET() {
//   import OpenAI from "openai";

//   const openai = new OpenAI({
//     apiKey: `${process.env.OPEN_AI}`,
//   });

//   // async function main() {
//   //   const embedding = await openai.embeddings.create({
//   //     model: "davinci-002",
//   //     input: "The quick brown fox jumped over the lazy dog",
//   //   });
    

//   //   console.log(embedding);
//   // }

//   export async function POST() {
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "user", content: "Where is Vietnam." }],
//       model: "gpt-3.5-turbo",
//     });
  
//     const data = await completion.choices[0].message.content
//     // console.log(completion.choices[0]);
//     return Response.json(data)
//     // const data = await completion.choices[0]
 
//     // return Response.json({ data })
//   }
  

//   // main();
// //   const data = await res.json()
 
// //   return Response.json({ data })
// // }



// // ====
// // ./app/api/chat/route.js
// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';

// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI,
// });

// export const runtime = 'edge';

// export async function POST(req:Request) {
//   const { messages } = await req.json();
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     messages,
//   });
//   const stream = OpenAIStream(response);
//   return new StreamingTextResponse(stream);
// }


//======
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  // 'data' contains the additional data that you have sent:
  const { messages, data } = await req.json();
 
  const initialMessages = messages.slice(0, -1);
  const currentMessage = messages[messages.length - 1];
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    stream: true,
    max_tokens: 1500,
    messages: [
      ...initialMessages,
      {
        ...currentMessage,
        content: [
          { type: 'text', text: currentMessage.content },
 
          // forward the image information to OpenAI:
          {
            type: 'image_url',
            image_url: data.imageUrl,
          },
        ],
      },
    ],
  });
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}