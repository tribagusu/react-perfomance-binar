import { memo } from "react"

const Kid = (props) => {
  const { countChild, handleChild } = props
  console.log("component anak")
  return (
    <div>
      <p>Hitung Anak: {countChild} </p>
      <button onClick={handleChild}>change child</button>
    </div>
  )
}

export default memo(Kid)
