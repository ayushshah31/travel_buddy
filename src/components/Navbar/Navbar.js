const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark navbar-component">
          <a class="navbar-brand" href="/">Travel Buddy</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto nav-item-style">
                <li class="nav-item ">
                <a class="nav-link " href="/">Reviews</a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link" href="/">SignUP</a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link" href="/">Login</a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link" href="/"><i className="fa-solid fa-user"></i></a>
              </li>
            </ul>
          </div>
      </nav>
    );
}
export default Navbar;