import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import classes from './Hh.module.css'

const EskiLiyew = () => {
  return (
    <>
    <section>
        <div className={classes.header_container}>
            {/* logo section */}
       <div className={classes.logo_container}>
        <a href="">  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="image" /></a>
                <div>
                    <span><CiLocationOn /></span>
                    <div>
                        <p>Deliver to</p>
                        <span>Ethiopia</span>
                    </div>
                </div>
       </div>
{/* search section */}
          <div className={classes.search}>
            <select name="" id=""><option value="">All</option></select>
            <input type="text" placeholder='Search Amazon'/>
            <FaSearch size={23}/>
          </div>
          {/* order section */}
          <div className={classes.order_container}>
           <a href="" className={classes.language}><img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png" alt="" />
           <select name="" id=""><option value="">EN</option></select></a>
           <a href="">
            <p>Hello, Sign in</p>
            <span>Account & Lists</span>
           </a>
           <a href=""><p>Returns</p><span>& orders</span></a>
<a href="" className={classes.cart}><CiShoppingCart size={35} /><span>0</span></a>
          </div>
        </div>
    </section>
    </>
  )
}

export default EskiLiyew