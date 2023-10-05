import {Route, Routes} from "react-router-dom"
import AdminPage from "./page/AdminPage/AdminPage"
import HomePage from "./page/HomePage/HomePage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/admin" element={<AdminPage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
