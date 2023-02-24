
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <div className="header">
        <div>
        <Link className='links' to= "/">Home</Link>
        </div>
       <nav >
       <ul className="navbar" >
       <Link className='links' to= "/login">login</Link>
       <Link className='links' to= "/signup">Sign up</Link>
       
       </ul>
       </nav>
    
        </div>
     );
}
 
export default Header;