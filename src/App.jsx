import { useState } from 'react'
import {

  BrowserRouter ,
  Routes,Route
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Sidebar from "./components/sidebar";

// catagorie's
import PersonalInfo from './components/sidebar/catagories/personalInfo';
import Summary from './components/sidebar/catagories/summary';
import History from './components/sidebar/catagories/history';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={ <Sidebar /> }>
          <Route path='/' key={1}  element={<PersonalInfo />} />
          <Route path='/info'  key={2} element={<PersonalInfo />} />
          <Route path='/summary' key={3}  element={<Summary />} />
          <Route path='/workhistory' key={4} element={<History />} />
          <Route path='/skills' key={5} element={<>Skills</>} />
        </ Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
