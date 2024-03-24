import React from 'react';
import item1 from '../images/items/1.jpg';
import item2 from '../images/items/2.jpg';

import item14 from '../images/items/14.jpg';

import item7 from '../images/items/7.jpg';

import item8 from '../images/items/8.jpg';

import item9 from '../images/items/9.jpg';

import item10 from '../images/items/10.jpg';

import item11 from '../images/items/11.jpg';

import item12 from '../images/items/12.jpg';

function ElectronicsSection() {
  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Electronics</h4>
      </header>

      <div className="card card-home-category">
        <div className="row no-gutters">
          <div className="col-md-3">
            <div className="home-category-banner bg-light-orange">
              <h5 className="title">Machinery items for manufacturers</h5>
              <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <a href="#" className="btn btn-outline-primary rounded-pill">Source now</a>
              <img src={item14} className="img-bg" alt="banner" />
            </div>
          </div>

          <div className="col-md-9">
            <ul className="row no-gutters bordered-cols">
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Well made electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item7} alt="item1" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Another demo text for item stuff goes here</h6>
                    <img className="img-sm float-right" src={item8} alt="item2" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Hong Kong, China</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Home and kitchen electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item9} alt="item3" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Group of electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item10} alt="item4" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Home and kitchen electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item11} alt="item5" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Home and kitchen electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item12} alt="item6" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Home and kitchen electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item1} alt="item7" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
                  </div>
                </a>
              </li>
              <li className="col-6 col-lg-3 col-md-4">
                <a href="#" className="item">
                  <div className="card-body">
                    <h6 className="title">Home and kitchen electronic stuff collection</h6>
                    <img className="img-sm float-right" src={item2} alt="item8" />
                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElectronicsSection;
