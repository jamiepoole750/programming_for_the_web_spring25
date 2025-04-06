import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { PennyDetail } from './views/PennyDetail';
import pennyData from "./assets/penny-data.json";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path=":id" element={<PennyDetail data={pennyData}/>}/>
    </Routes>
  )
}

export default App
