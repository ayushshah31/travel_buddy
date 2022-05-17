import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark navbar-component">
            <Link className="navbar-brand" to='/'><i class="fa-solid fa-location-dot"></i> Travel Buddy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto nav-item-style">
                <li className="nav-item ">
                    <Link className="nav-link" to='/reviews' >Reviews</Link>
              </li>
              <li className="nav-item text-dark">
                  <Link className="nav-link" to='/signup' >SignUp</Link>
              </li>
              <li className="nav-item text-dark">
                  <Link className="nav-link" to='/login' >Login</Link>
              </li>
              <li className="nav-item text-dark">
                  <Link className="nav-link" to='/profile' ><i className="fa-solid fa-user"></i></Link>
              </li>
            </ul>
          </div>
      </nav>
    );
}
export default Navbar;