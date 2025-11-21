import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberIn, setNumberIn] = useState(false)
  const [charIn, setCharIn] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberIn) string += "0123456789"
    if (charIn) string += "!@#$%^&*(){}:|~`;'[]"

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * string.length)
      pass += string.charAt(random)
    }
    setPassword(pass)
  }, [length, numberIn, charIn])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true)
  }, [password])

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl mb-6 font-bold">PASSWORD GENERATOR</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 rounded-l-md text-black"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md"
          >
            Copy
          </button>
        </div>

        {copied && (
          <p className="text-green-400 text-sm mb-2 text-center">
            Copied Password!
          </p>
        )}

        <div className="flex items-center gap-2 mb-4">
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={numberIn}
            onChange={() => setNumberIn((prev) => !prev)}
          />
          <label>Include Numbers</label>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={charIn}
            onChange={() => setCharIn((prev) => !prev)}
          />
          <label>Include Special Characters</label>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
