import {Link, Route, Routes} from 'react-router-dom'
import { Home } from './views/Home';
import { Llamas } from './views/Llamas';
import { Alpacas } from './views/Alpacas';
import './App.css'

function App() {

  return (
    <>
      {/*Navigation here */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpacas">Alpacas</Link></li>
      </ul>
     
      {/* Routes here, where there will be a route for each page */}
      {/* path is the URL that will be matched */}
      {/* element is the component we want to show*/}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/llamas" element={<Llamas/>} />
        <Route path="/alpacas" element={<Alpacas/>} />
      </Routes>
    </>
  )
}

export default App
