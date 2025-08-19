import { useState } from "react"



function App() {
  const [color,setColor]=useState("")

  return (
    <>
<h1 
  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg text-center py-4 " style={{backgroundColor:"black"}}>
  BackGround Changer Project</h1> 
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
        <button onClick={()=>setColor("red")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"red", color:"white"}}>Red</button>
        <button onClick={()=>setColor("green")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"green", color:"white"}}>Green</button>
        <button onClick={()=>setColor("pink")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"pink", color:"white"}}>Pink</button>
        <button  onClick={()=>setColor("blue")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"blue", color:"white"}}>Blue</button>
        <button  onClick={()=>setColor("black")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"black", color:"white"}}>Black</button>
        <button  onClick={()=>setColor("olive")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"olive", color:"white"}}>Olive</button>
        <button  onClick={()=>setColor("orange")} className=" outline-none  px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"orange", color:"white"}}>Orange</button>

      </div>
      </div>
      </div>
    </>
  )
}
export default App
