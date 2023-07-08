import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Fotter'
import SignUp from './components/Signup Page/SignUp';
import Login from './components/Login Page/Login';
import Product from "./components/Product Page/productList"
import AddProduct from "./components/Add_Products/addProduct"
import UpdateProduct from "./components/Update Product/UpdateProduct"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PrivateComponent from './components/private_component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Product/>} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout Componet</h1>} />
            <Route path='/profile' element={<h1>Profile Componet</h1>} />
            {/* <Route path='/' element={<h1>Product Componet</h1>} /> */}
          </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
