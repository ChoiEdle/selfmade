import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { SelectSignup } from './pages/SelectSignup.jsx';
import { BuyerCheck } from './pages/BuyerCheck.jsx'
import './styles/selfmade.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/signup' element={<SelectSignup />} />
          <Route path='/buyerCheck' element={<BuyerCheck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
