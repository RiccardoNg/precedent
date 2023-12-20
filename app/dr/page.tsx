import DoctorDashboard from '@/components/doctor/DoctorDashboard'
import { FormEvent } from 'react'
 
export default function Doctor() {
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/bmi', {
  //     method: 'POST',
  //     body: formData,
  //   })
 
  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }
 
  return (
    <>
    <div className="w-full max-w-xl px-5 xl:px-0">
      <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
        <DoctorDashboard/>
      </div>
    </div>
    
    </>
    
  )
}