import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-main navbar-expand-lg border-bottom">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> <i className="fa fa-bars text-muted mr-2"></i> Categories </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Machinery</a>
                <a className="dropdown-item" href="#">Electronics</a>
                <a className="dropdown-item" href="#">Home textile</a>
                <a className="dropdown-item" href="#">Home and kitchen</a>
                <a className="dropdown-item" href="#">Service and equipment</a>
                <a className="dropdown-item" href="#">Healthcare items</a>
                <a className="dropdown-item" href="#">Toys and Hobbies</a>
              </div>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Ready to ship</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trade shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell with us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Demo pages</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="page-index.html">Main</a>
                <a className="dropdown-item" href="page-category.html">All category</a>
                <a className="dropdown-item" href="page-listing-large.html">Listing list</a>
                <a className="dropdown-item" href="page-listing-grid.html">Listing grid</a>
                <a className="dropdown-item" href="page-shopping-cart.html">Shopping cart</a>
                <a className="dropdown-item" href="page-detail-product.html">Item detail</a>
                <a className="dropdown-item" href="page-content.html">Info content</a>
                <a className="dropdown-item" href="page-user-login.html">Page login</a>
                <a className="dropdown-item" href="page-user-register.html">Page register</a>
                <a className="dropdown-item disabled text-muted" href="#">More components</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-md-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Get the app</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">Russian</a>
                  <a className="dropdown-item" href="#">French</a>
                  <a className="dropdown-item" href="#">Spanish</a>
                  <a className="dropdown-item" href="#">Chinese</a>
                </div>
              </li>
           </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
