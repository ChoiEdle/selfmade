import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Signup } from './pages/Signup.jsx';
import { Cart } from './pages/Cart.jsx';
import { CheckoutInfo } from './pages/CheckOutInfo.jsx';
import './styles/selfmade.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
