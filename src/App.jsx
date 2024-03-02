import Addtodo from "./components/Addtodo"
import Todos from "./components/Todos"


function App() {
 

  return (
    <>
     <h1 className="  flex justify-center text-4xl bg-black text-white
     ">REDUX TOOLKIT</h1>
     <Addtodo/>
     <Todos/>
    </>
  )
}

export default App
