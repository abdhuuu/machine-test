import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login"
import "./font/Helvetica.ttf"
import "./assets/css/common.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Common from './components/Common';
import { fetchDatas } from './redux/dataSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDatas())
  }, [])

  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route path="all" element={<Common />} />
          <Route path="asia" element={<Common name="Asia" />} />
          <Route path="europe" element={<Common name="Europe" />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
