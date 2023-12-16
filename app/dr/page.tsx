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
      {/* <div className="z-10 w-30 max-w-xl px-5 xl:px-0">
          Hello 1
      </div>
      <div className="z-10 w-30 max-w-xl px-5 xl:px-0">
          Hello 2
      </div> */}
      

      {/* <div className="z-10 w-full pt-5 px-4 mb-8 mx-auto ">
          <div className="text-sm text-gray-700 py-1">
              Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/react/sidebar?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
          </div>
      </div> */}
      <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <DoctorDashboard/>
      </div>
    </div>
    
    </>
    
  )
}