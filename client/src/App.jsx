import { Routes,Route } from "react-router-dom"
import Landing from "./Page/Landing/landing"

function App() {
  return (
   <Routes>
    <Route path="/" element={<Landing />} />
   </Routes>
  )
}

export default App
