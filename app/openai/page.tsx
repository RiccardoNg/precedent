// // ./app/page.js
// 'use client';

// import { useChat } from 'ai/react';

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();

//   return (
//     <div className="w-full max-w-xl px-5 xl:px-0">
//       <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
    
  
//         {messages.map(m => (
//           <div key={m.id}>
//             {m.role}: {m.content}
//           </div>
//         ))}

//         <form onSubmit={handleSubmit}>
//           <input
//             value={input}
//             placeholder="Say something..."
//             onChange={handleInputChange}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }


'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className="w-full max-w-xl px-5 xl:px-0">
      <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
    
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
          {messages.length > 0
            ? messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap">
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                  {m.content}
                </div>
              ))
            : null}
    
          <form
            onSubmit={e => {
              handleSubmit(e, {
                data: {
                  imageUrl:
                    'http://cms.lucloimeme.com/uploads/KQ_ctm_fc2889e4a4.jpg?updated_at=2023-12-19T15:25:58.554Z',
                },
              });
            }}
          >
            <input
              className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              // value = "bạn hãy nhận diện các thông tin, chỉ số từ ảnh sau đây, sau đó bằng kiến thức của bạn hãy đưa nhận xét về chỉ số trên cho mục đích tham khảo"
              placeholder="Bạn hãy nhận diện các thông tin, chỉ số từ ảnh sau đây, sau đó bằng kiến thức của bạn hãy đưa nhận xét về chỉ số trên cho mục đích tham khảo"
              onChange={handleInputChange}
            />
          </form>
        </div>
        </div>
    </div>
  );
}