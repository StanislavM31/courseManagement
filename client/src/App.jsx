import {Route, Routes} from "react-router-dom"
import AdminPage from "./page/AdminPage/AdminPage"
import HomePage from "./page/HomePage/HomePage"
import SinglePage from "./page/SinglePage/SinglePage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/admin" element={<AdminPage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/course/:id" element={<SinglePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
