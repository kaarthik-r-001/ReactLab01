import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RecentlyAdded from './components/RecentlyAdded';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Book from './pages/Book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {/* <Header />
      <Navbar /> */}
      <Routes>
        {/* <Route path="/" element ={<Index/>}></Route> */}
        <Route index element={<RecentlyAdded />} />
        <Route path='/About' element={<About />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
