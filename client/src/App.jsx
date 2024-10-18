import AuthPage from "./Account/AuthPAge"
import Nav from "./Components/Nav"
import Home from "./Home/Home"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
     <div className="">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={<AuthPage/>}/>
        </Routes>
     </div>
    </>
  )
}

export default App
