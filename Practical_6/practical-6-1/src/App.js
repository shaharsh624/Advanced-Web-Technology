import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task1and2 from './Task1and2/Task1and2';
import Task3and4 from './Task3and4/Task3and4';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/student" element={<Task1and2 />}> </Route>
          <Route path="/furniture" element={<Task3and4/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
