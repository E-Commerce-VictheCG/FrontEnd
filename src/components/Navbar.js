import {Link} from 'react-router-dom'
const Navbar = () => {
    const auth = localStorage.getItem('user')

    return (
        <nav className='navbar'>
            <ul className='navbar_ul'>
                <li><Link to='/'><p>Products</p></Link></li>
                <li><Link to='/add'><p>Add Products</p></Link></li>
                <li><Link to='/update'><p>Update Products</p></Link></li>
                {/* <li><Link to='/logout'><p>logout</p></Link></li> */}
                <li><Link to='/profile'><p>Profile</p></Link></li>
                <li>{auth ? <Link to='/logout'><p>Logout</p></Link>:<Link to='/signup'><p>SignUp</p></Link>}</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;