import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl shadow-lg'>tailwind test</h1>
     <Card username="anushka" btnText="hehehe"/>
     <Card username="bhoomika" /> {/*lets say button paas ni kra to we need to set a default value in props*/}
    </>
  )
}

export default App
