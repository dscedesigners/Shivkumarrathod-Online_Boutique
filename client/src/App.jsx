import AuthPage from "./Account/AuthPAge"
import TailorAuthPage from "./Account/TailorAuthPage"
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
          <Route path="/tailorauth" element={<TailorAuthPage/>}/>
        </Routes>
     </div>
    </>
  )
}

export default App
