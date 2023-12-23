'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function NewTodoPage() {
  const [isCreating, setIsCreating] = useState(false)
  const [title, setTitle] = useState('')
  const [importance, setImportance] = useState('')
  const router = useRouter()
//   const queryClient = useQueryClient()

//   const { mutateAsync: createTodo } = useMutation({
//     mutationFn: createTodoFn,
//     onSuccess: () => {
//       router.push(AppRoutes.Home)
//       queryClient.invalidateQueries(['todos'])
//     }
//   })

  const createTodo = async () => {
    const todo = {
      title: "title1",
      importance: "Important",
      userId: "clqhpkk980000tkio979dc0y7"
    }

    const response = await fetch('api/todos', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(todo)

    });

    if (response.ok) {
      console.log("done add todo")
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (title === '' || importance === '') {
      return
    }

    try {
      // createTodo({ title, importance })
      createTodo()

    //   router.push(AppRoutes.Home)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className="w-full max-w-xl px-5 xl:px-0">
        <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
                    
          <h3 className='text-2xl text-center p-3'>Create New Todo</h3>
          
          <form
            onSubmit={handleSubmit}
            className='flex gap-4 flex-col sm:w-2/3 md:w-1/3'
          >
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='input-primary'
            />
            <select
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
              className='select-primary'
            >
              <option value='' disabled>
                Select Importance
              </option>
              <option value='important'>Important</option>
              <option value='not-important'>Not Important</option>
            </select>
            <div className='flex gap-1 justify-end'>
              <Link href='..' className='btn-primary'>
                Cancel
              </Link>
              <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none" disabled={isCreating} type='submit' >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
