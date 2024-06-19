import React from 'react'
import {catagoryInfo} from './CatagoryFullInfo'
import CatagoryCard from './CatagoryCard'
import classes from './Catagory.module.css'

function Catagory() {
  return (
    <section className={classes.catagory_container}>
        {
            catagoryInfo.map((infos)=>{
          return      <CatagoryCard data = {infos}  />})
        }
    </section>
  )
}

export default Catagory
