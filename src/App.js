import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Common/Header';
import BasicDetails from './Health/BasicDetails';
import ChildComponent from './Health/ChildComponent';
import Location from './Health/Location';
import ParentComponent from './Health/ParentComponent';
import Personal from './Health/Personal';
import Storage from './Health/Storage';
import Login from './Login/Login';
import './Style.css';
import Upload from './Upload/Upload';
import Create from './component/Create';
import Curd from './component/Curd';
function App() {
  return (
    <>
    <Router>
    <Header/> 
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/" element={<Curd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/header" element={<Header/>} />
        <Route path="/healthpolicy" element={<Location />} />
        <Route path="/uploadphoto" element={<Upload />} />
        <Route path="/BasicDetails" element={<BasicDetails />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/ParentComponent" element={<ParentComponent />} />
        <Route path="/childcomponent" element={<ChildComponent />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
    </>
  
  );
}
export default App;
