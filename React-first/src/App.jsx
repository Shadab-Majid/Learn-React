import React, { useState } from 'react'
import NewComponent from './NewComponent' // importing the custom product.jsx 
function App() {
  var [a, b ] = useState(69) // in use state we can define any data. and to access this value we need to left side name like {a} which will print the current value of the state and if want to  change the value of state we can use b to update.
  return (
    <div className='w-full h-screen bg-zinc-900 text-center'>
    <div className='text-white'>{a}</div>
    <button onClick={() => b(a+1)} className='px-3 py-2 my-3 bg-green-500 rounded-md text-xs text-white'>Button</button>
    <NewComponent /> {/* this is the syntax to calling any jsx file. */}
    </div>
  )
}

export default App