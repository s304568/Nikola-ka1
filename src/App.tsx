import { useState } from 'react'
import './App.css'
import PuppyImage from "./PuppyImage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <PuppyImage></PuppyImage>
    </>
  )
}

export default App
