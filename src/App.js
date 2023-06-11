import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Fotter'
import SignUp from './components/Signup Page/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PrivateComponent from './components/private_component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<h1>Product Componet</h1>} />
            <Route path='/add' element={<h1>Add Product Componet</h1>} />
            <Route path='/update' element={<h1>Update Product Componet</h1>} />
            <Route path='/logout' element={<h1>Logout Componet</h1>} />
            <Route path='/profile' element={<h1>Profile Componet</h1>} />
            <Route path='/signup' element={<SignUp />} />
            {/* <Route path='/' element={<h1>Product Componet</h1>} /> */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
