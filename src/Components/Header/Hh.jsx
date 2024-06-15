import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import classes from './Hh.module.css'
import HhLower from "./HhLower";

const Hh = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section */}
          <div className={classes.logo_container}>
            <a href="">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="image" />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
            <div className={classes.search}>
                <select name="" id=""><option value="">All</option></select>
                <input type="text" placeholder="Search Amazon"/>
                <FaSearch size={23}/>
            </div>

{/* order section */}

<div className={classes.orders_container}>
    <a href="" className={classes.language}>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png" alt="" />
        <select name="" id=""><option value="">EN</option></select>
    </a>
    <a href="" className={classes.signIn}>
        <p>hello, signIn</p>
        <select name="" id=""><option value="">Account & Lists</option></select> 
    </a>
    <a href="">
        <p>Returns</p>
        <span>& orders</span>
    </a>
    <a href="" className={classes.cart}>
    <BsCart3 size={34}/>
    <span>0</span>
    </a>
</div>


        </div>
      </section>
      <HhLower/>
    </>
  );
};

export default Hh;
