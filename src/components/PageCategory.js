import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from "../images/banners/slide1.jpg";
import slide2 from "../images/banners/slide2.jpg";
import slide3 from "../images/banners/slide3.jpg";
import item1 from "../images/items/1.jpg";
import item2 from "../images/items/2.jpg";
import item6 from "../images/items/6.jpg";

const PageCategory = () => {
  return (
    <div className="container">
      <section className="section-main padding-y">
        <main className="card">
          <div className="card-body">
            <div className="row">
              <aside className="col-lg col-md-3 flex-lg-grow-0">
                <h6>MY MARKETS</h6>
                <nav className="nav-home-aside">
                  <ul className="menu-category">
                    <li><a href="#">Fashion and clothes</a></li>
                    <li><a href="#">Automobile and motors</a></li>
                    <li><a href="#">Gardening and agriculture</a></li>
                    <li><a href="#">Electronics and tech</a></li>
                    <li><a href="#">Packaginf and printing</a></li>
                    <li><a href="#">Home and kitchen</a></li>
                    <li><a href="#">Digital goods</a></li>
                    <li className="has-submenu"><a href="#">More items</a>
                      <ul className="submenu">
                        <li><a href="#">Submenu name</a></li>
                        <li><a href="#">Great submenu</a></li>
                        <li><a href="#">Another menu</a></li>
                        <li><a href="#">Some others</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </aside>
              <div className="col-md-9 col-xl-7 col-lg-7">
                <Carousel>
                  <Carousel.Item>
                    <img className="d-block w-100" src={slide1} alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={slide2} alt="Second slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={slide3} alt="Third slide" />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md d-none d-lg-block flex-grow-1">
                <aside className="special-home-right">
                  <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                  <div className="card-banner border-bottom">
                    <div className="py-3" style={{ width: '80%' }}>
                      <h6 className="card-title">Men clothing</h6>
                      <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                    </div>
                    <img src={item1} height="80" className="img-bg" alt="Men clothing" />
                  </div>
                  <div className="card-banner border-bottom">
                    <div className="py-3" style={{ width: '80%' }}>
                      <h6 className="card-title">Winter clothing</h6>
                      <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                    </div>
                    <img src={item2} height="80" className="img-bg" alt="Winter clothing" />
                  </div>
                  <div className="card-banner border-bottom">
                    <div className="py-3" style={{ width: '80%' }}>
                      <h6 className="card-title">Home inventory</h6>
                      <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                    </div>
                    <img src={item6} height="80" className="img-bg" alt="Home inventory" />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default PageCategory;
