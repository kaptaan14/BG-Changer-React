import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>

          <h1 className="text-center text-4xl">Click to change Color</h1>
        <div className="fixed flex flex-wrap  justify-center bottom-12 px-2 inset-x-0">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button 
              onClick={()=> setColor('red')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "red"}}
              >Red</button>
              <button 
              onClick={()=> setColor('green')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "green"}}
              >Green</button>
              <button
              onClick={()=> setColor('blue')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "blue"}}
              >Blue</button>
              <button
              onClick={()=> setColor('pink')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "pink"}}
              >Pink</button>
              <button
              onClick={()=> setColor('orange')}
               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "orange"}}
              >Orange</button>
              <button
              onClick={()=> setColor('black')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "black"}}
              >Black</button>
              <button
              onClick={()=> setColor('yellow')}
               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "yellow"}}
              >Yellow</button>
              <button
              onClick={()=> setColor('purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "purple"}}
              >Purple</button>
              <button
              onClick={()=> setColor('brown')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "brown"}}
              >Brown</button>
              <button
              onClick={()=> setColor('grey')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "grey"}}
              >Grey</button>
              <button
              onClick={()=> setColor('indigo')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "indigo"}}
              >Indigo</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
