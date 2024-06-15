import React from "react";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { ImSearch } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section */}
          <div className={classes.logo_container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="image"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            <ImSearch size={25} />
          </div>

          {/* order section */}
          <div className={classes.order_container}>
            <a className={classes.language}>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>hello, sign in</p>
              <span>Account & Lists</span>
            </a>
            <a href="">
              <p>Returns</p>
              <span> & orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BsCart2 size={35} />
              <span>0</span>
            </a>
          </div>
          
        </div>
      </section>

      {/* lowerHeader section */}
      <LowerHeader />
    </>
  );
}

export default Header;
