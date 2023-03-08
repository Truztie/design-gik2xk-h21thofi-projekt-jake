import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './views/Welcome';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/"element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
