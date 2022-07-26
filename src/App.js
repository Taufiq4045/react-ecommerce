import { Loader, Navbar , PrivateRoute} from './components'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home, Product, Cart, Wishlist, Mock, SignUp, Login, Page404 , Profile , Address, Checkout, Order} from "./pages"
import 'react-toastify/dist/ReactToastify.css';
import { AuthRoute } from './components/AuthRoute';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Loader/>
      <ToastContainer position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />

         <Route element={<PrivateRoute/>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order' element={<Order/>}/>
         </Route>
        
         <Route element={<AuthRoute/>}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
         </Route>
        
        <Route path="/mock" element={<Mock />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;