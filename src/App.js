import Home from './home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <body>
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;