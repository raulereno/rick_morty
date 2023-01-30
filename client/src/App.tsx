
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Landing, Notfound } from './pages';
import "./styles/index.scss";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
