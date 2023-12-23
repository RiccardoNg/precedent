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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (title === '' || importance === '') {
      return
    }

    try {
    //   createTodo({ title, importance })

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
              <button disabled={isCreating} type='submit' className='btn-primary'>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
