import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error404 from './pages/Error404'
import './App.css';
import LandingPage from './pages/LandingPage';
import Product from './pages/Product';

function App() {
  return (
    <>
    < BrowserRouter>
      <Routes>
        < Route path='/' element={< LandingPage />} />
        < Route path='product/:userId' element={< Product />} />
        < Route path='*' element={< Error404 />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
