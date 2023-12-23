import { FormEvent } from 'react'
 
export default function mypatient() {
  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/todos', {
      method: 'GET',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <>
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
    {/* <form onSubmit={onSubmit}> */}
      <form>
        <label htmlFor="weight">Weight</label>
        <input type="text" name="weight" value="22"/>
        <br/>
        <label htmlFor="height">Height</label>
        <input type="text" name="height" value="22"/>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
    
  )
}