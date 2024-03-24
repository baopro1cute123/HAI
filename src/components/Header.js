import { faCommentDots, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../css/bootstrap.css";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <section className="header-main border-bottom">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-2 col-lg-3 col-md-12">
          <a href="http://bootstrap-ecommerce.com" className="brand-wrap">
            <img className="logo" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="col-xl-6 col-lg-5 col-md-6">
          <form action="#" className="search-header">
            <div className="input-group w-100">
              <select className="custom-select border-right" name="category_name">
                <option value="">All type</option>
                <option value="codex">Special</option>
                <option value="comments">Only best</option>
                <option value="content">Latest</option>
              </select>
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  <i className="fa fa-search"></i> Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="widgets-wrap float-md-right">
            <WidgetHeader icon={faUser} notifyCount="3" text="My profile" />
            <WidgetHeader icon={faCommentDots} notifyCount="1" text="Message" />
            <WidgetHeader icon={faStore} text="Orders" />
            <WidgetHeader icon={faShoppingCart} text="Cart" />

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

function WidgetHeader({ icon, notifyCount, text }) {
    return (
        <div className="widget-header mr-3">
        <a href="#" className="widget-view">
          <div className="icon-area">
            <FontAwesomeIcon icon={icon} />
            {notifyCount && <span className="notify">{notifyCount}</span>}
          </div>
          <small className="text">{text}</small>
        </a>
      </div>
    );
  }

export default Header