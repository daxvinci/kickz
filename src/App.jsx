import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error404 from './pages/Error404'
import './App.css';
import LandingPage from './pages/LandingPage';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import { useEffect, useState } from 'react';

function App() {
  const [items,setItems] = useState([])
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log(items)
  },[items])

  const handleDelete = (id)=>{
    setItems(items.filter((cart)=>cart.id !== id))
}

  return (
    <>
    < BrowserRouter>
      <Routes>
        < Route path='/' element={< LandingPage items={items} />} />
        < Route path='product/:userId' element={< Product count={count} items={items} setItems={setItems} setCount={setCount} />} />
        < Route path='checkout' element={< Checkout setItems={setItems} items={items} handleDelete={handleDelete} />} />
        < Route path='*' element={< Error404 />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
