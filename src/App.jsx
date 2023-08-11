import { useState } from 'react'
import {

  BrowserRouter ,
  Routes,Route
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Sidebar from "./components/sidebar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Sidebar /> }>
          <Route path='/info'  element={<>Hello this is surya</>} />
          <Route path='/summary'  element={<>Summary</>} />
          <Route path='/workhistory'  element={<>Work History</>} />
          <Route path='/skills'  element={<>Skills</>} />
        </ Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;