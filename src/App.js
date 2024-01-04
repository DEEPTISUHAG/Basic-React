import './App.css';
import './Style.css';
import Login from './Login/Login';
import Header from './Common/Header';
import Signup from './Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/> 
      {/* <Router>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router> */}

    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;
