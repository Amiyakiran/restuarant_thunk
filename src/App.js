import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import RestView from './pages/RestView';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant-view' element={<RestView/>}/>
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
