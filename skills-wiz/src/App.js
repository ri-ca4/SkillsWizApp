import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Skills from './pages/Skills';
import Main from './pages/Main';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/main_app' element={<Main/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
