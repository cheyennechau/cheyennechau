import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Links from './components/Links';
import Home from './pages/Home';

const App = () => {

  return (
    <>
      <Router>
        {/* <Navbar className="text-white gap-8 fixed bottom-15 left-30 z-1" /> */}
        <Links className="fixed right-15 top-10" />
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
