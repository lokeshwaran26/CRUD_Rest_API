import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home"
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
        <div className="App">
          <Header/>
            <ToastContainer/>
              <Routes>
                <Route exact path='/' element={ <Home/>}/>
                <Route path='/add' element={ <AddEdit/>}/>
                <Route path='/update/:id' element={ <AddEdit/>}/>
                <Route path='/view/:id' element={<View/>}/>
                <Route path='/about' element={ <About/>}/>
              </Routes>
        </div>
    
    </BrowserRouter>

    
  );
}

export default App;
