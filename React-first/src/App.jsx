import React from 'react'
import Product from './product' // importing the custom product.jsx 
function App() {
  return (
    <div>
    <div className='w-full h-screen bg-zinc-900'>Hey</div>
    <Product /> {/* this is the syntax to calling any jsx file. */}
    </div>
  )
}

export default App