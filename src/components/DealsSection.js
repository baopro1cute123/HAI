import React from 'react';
import item3 from "../images/items/3.jpg";
import item4 from "../images/items/4.jpg";

import item5 from "../images/items/5.jpg";

import item6 from "../images/items/6.jpg";

import item7 from "../images/items/7.jpg";

const DealsSection = () => {
  return (
    <section className="padding-bottom">
      <div className="card card-deal">
        
        <div className="row no-gutters items-wrap">
        <div className="col-md col-6">
          <header className="section-heading">
            <h3 className="section-title">Deals and offers</h3>
            <p>Hygiene equipments</p>
          </header>
          <div className="timer">
            <div><span className="num">04</span> <small>Days</small></div>
            <div><span className="num">12</span> <small>Hours</small></div>
            <div><span className="num">58</span> <small>Min</small></div>
            <div><span className="num">02</span> <small>Sec</small></div>
          </div>
        </div>
          <div className="col-md col-6">
            <figure className="card-product-grid card-sm">
              <a href="#" className="img-wrap">
                <img src={item3} alt="Summer clothes" />
              </a>
              <div className="text-wrap p-3">
                <a href="#" className="title">Summer clothes</a>
                <span className="badge badge-danger"> -20% </span>
              </div>
            </figure>
          </div>
          <div className="col-md col-6">
            <figure className="card-product-grid card-sm">
              <a href="#" className="img-wrap">
                <img src={item4} alt="Some category" />
              </a>
              <div className="text-wrap p-3">
                <a href="#" className="title">Some category</a>
                <span className="badge badge-danger"> -5% </span>
              </div>
            </figure>
          </div>
          <div className="col-md col-6">
            <figure className="card-product-grid card-sm">
              <a href="#" className="img-wrap">
                <img src={item5} alt="Another category" />
              </a>
              <div className="text-wrap p-3">
                <a href="#" className="title">Another category</a>
                <span className="badge badge-danger"> -20% </span>
              </div>
            </figure>
          </div>
          <div className="col-md col-6">
            <figure className="card-product-grid card-sm">
              <a href="#" className="img-wrap">
                <img src={item6} alt="Home apparel" />
              </a>
              <div className="text-wrap p-3">
                <a href="#" className="title">Home apparel</a>
                <span className="badge badge-danger"> -15% </span>
              </div>
            </figure>
          </div>
          <div className="col-md col-6">
            <figure className="card-product-grid card-sm">
              <a href="#" className="img-wrap">
                <img src={item7} alt="Smart watches" />
              </a>
              <div className="text-wrap p-3">
                <a href="#" className="title text-truncate">Smart watches</a>
                <span className="badge badge-danger"> -10% </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealsSection;
