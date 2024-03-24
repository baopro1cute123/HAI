import React from 'react';
import AU from "../images/icons/flags/AU.png";
import CN from "../images/icons/flags/CN.png";
import DE from "../images/icons/flags/DE.png";
import GB from "../images/icons/flags/GB.png";
import IN from "../images/icons/flags/IN.png";
import RU from "../images/icons/flags/RU.png";
import TR from "../images/icons/flags/TR.png";
import UZ from "../images/icons/flags/UZ.png";


function ChooseRegionSection() {
  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Choose region</h4>
      </header>

      <ul className="row mt-4">
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={CN} alt="China" /> <span>China</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={DE} alt="Germany" /> <span>Germany</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={AU} alt="Australia" /> <span>Australia</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={RU} alt="Russia" /> <span>Russia</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={IN} alt="India" /> <span>India</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={GB} alt="England" /> <span>England</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={TR} alt="Turkey" /> <span>Turkey</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <img className="icon-flag-sm" src={UZ} alt="Uzbekistan" /> <span>Uzbekistan</span> </a></li>
        <li className="col-md col-6"><a href="#" className="icontext"> <i className="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span> </a></li>
      </ul>
    </section>
  );
}

export default ChooseRegionSection;
