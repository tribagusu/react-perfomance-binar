import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(1)
  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>komponent orang tua</h1>
      <h1>hitung:</h1>
      <button onClick={handleCount}>change</button>
    </div>
  )
}

export default App
