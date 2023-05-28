
import Footer from './Components/footer/Footer';
import HomeMain from './Components/home/HomeMain';

import { Routes, Route } from "react-router-dom";
import SignUp from './Components/signUP_signIn/SignUp';
import AboutProduct from './Components/productDetals/AboutProduct';
import Basket from './Components/basket/Basket';
import ProductPage from './Components/products/ProductPage';
import NewNav from './Components/header/NewNav';
import MainProductPage from './Components/products/allProducts/MainProductPage';

const style = {

  background: '#2E3B55'
};

function App() {

 

  return (<>

    {/* <Navbaar /> */}
    <NewNav />
    <Routes>
    
      <Route path='/' element={<HomeMain />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/aboutproduct/:id' element={<AboutProduct />}></Route>
      <Route path="/basket" element={<Basket />}></Route>
      {/* <Route path='/products' element={<ProductPage />}></Route> */}
      <Route path='/products' element={<MainProductPage />}></Route>
    </Routes>
      
    <Footer />

  </>);
}

export default App;
