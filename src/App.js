import React, { useState, useCallback, useMemo, useEffect } from "react"
const Kid = React.lazy(() => import("./components/Kid"))
const Boy = React.lazy(() => import("./components/Boy"))

function App() {
  const [count, setCount] = useState(1)
  const [countChild, setCountChild] = useState(1)
  const [data, setData] = useState(["agya", "ayla", "cayla"])

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleChild = useCallback(
    () => setCountChild((prevState) => prevState + 1),
    []
  )

  const memoLength = useMemo(() => {
    console.log("ini length data")
    return data.length
  }, [data])

  const handleData = () => {
    setData("data baru")
  }

  return (
    <div className="App">
      <p>parent component</p>
      <p>Hitung Parent: {count}</p>
      <button onClick={handleCount}>change parent</button>
      <Kid countChild={countChild} handleChild={handleChild} />
      <Boy />
      <h1>{memoLength}</h1>
      <button onClick={handleData}>change data</button>
    </div>
  )
}

export default App
