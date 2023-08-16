import { useState } from 'react'
import {

  BrowserRouter ,
  Routes,Route
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Sidebar from "./components/sidebar";
import { Provider  } from "react-redux";

// catagorie's == > new changhes done
import PersonalInfo from './components/sidebar/catagories/personalInfo';
import Summary from './components/sidebar/catagories/summary';
import History from './components/sidebar/catagories/history';

// store
import store from "./store";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={ <Sidebar /> }>
          <Route path='/'   element={<PersonalInfo />} />
          <Route path='/info'  element={<PersonalInfo />} />
          <Route path='/summary'  element={<Summary />} />
          <Route path='/workhistory'  element={<History />} />
          <Route path='/skills'  element={<>Skills</>} />
        </ Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
