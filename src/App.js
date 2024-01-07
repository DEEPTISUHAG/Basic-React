import './App.css';
import './Style.css';
import Login from './Login/Login';
import Header from './Common/Header';
import Signup from './Signup/Signup';
import Location from './Health/Location';
import Upload from './Upload/Upload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <>
    <Router>
    <Header/> 
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/header" element={<Header/>} />
        <Route path="/healthpolicy" element={<Location />} />
        <Route path="/uploadphoto" element={<Upload />} />

      </Routes>
    </Router>
    </>
  
  );
}
export default App;
