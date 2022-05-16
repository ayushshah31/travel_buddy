const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark navbar-component">
          <a className="navbar-brand" href="/">Travel Buddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto nav-item-style">
                <li className="nav-item ">
                <a className="nav-link " href="/">Reviews</a>
              </li>
              <li className="nav-item text-dark">
                <a className="nav-link" href="/">SignUP</a>
              </li>
              <li className="nav-item text-dark">
                <a className="nav-link" href="/">Login</a>
              </li>
              <li className="nav-item text-dark">
                <a className="nav-link" href="/"><i className="fa-solid fa-user"></i></a>
              </li>
            </ul>
          </div>
      </nav>
    );
}
export default Navbar;