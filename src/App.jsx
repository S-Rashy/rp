
import './App.css';
import Form from './components/Form';
import { color } from './context/Black';
// import About from './pages/About';
// import Homepage from './pages/Homepage';
// import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <color.Provider value ="black">
    
    <div>
        <Form/>
      {/* <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Homepage/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      
      </BrowserRouter> */}

    </div>
    </color.Provider>
      
  )
}

export default App
