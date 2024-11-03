import Home from './home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <body>
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
