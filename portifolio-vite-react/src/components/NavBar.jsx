import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
     <div className="container-fluid">
    <a className="navbar-brand" href="#">Portifolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/">
            <span className="nav-link">Home</span></Link>         
        </li>

        <li className="nav-item">
          <Link to="/sobre">
            <span className="nav-link">Sobre</span></Link>         
        </li>

        <li className="nav-item">
          <Link to="/projetos">
            <span className="nav-link">Projetos</span></Link>         
        </li>

        <li className="nav-item">
          <Link to="/contato">
            <span className="nav-link">Contato</span></Link>         
        </li>
       
      </ul>
     
    </div>
  </div>
</nav> 
 
     {/* Div Offcanvas */}
        <div className="offcanvas offcanvas-end" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Portifolio</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
                <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <span className="nav-link" data-bs-dismiss="offcanvas">Home</span></Link>         
              </li>

              <li className="nav-item">
                <Link to="/sobre">
                  <span className="nav-link text-reset" data-bs-dismiss="offcanvas"> Sobre</span></Link>         
              </li>

              <li className="nav-item">
                <Link to="/projetos">
                  <span className="nav-link" data-bs-dismiss="offcanvas">Projetos</span></Link>         
              </li>

              <li className="nav-item">
                <Link to="/contato">
                  <span className="nav-link" data-bs-dismiss="offcanvas">Contato</span></Link>         
              </li>
            
            </ul>
          </div>
        </div>

    </div>
     
      
    </>
   
  )
}

export default NavBar