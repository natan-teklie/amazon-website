import React from 'react'
import classes from './Catagory.module.css'

function CatagoryCard(props) {
  return (
    <div className={classes.catagory}>
        <a href=""><span>
            <h2>{props.data.title}</h2>
        </span>
        <img src={props.data.imgLink} alt="" />
        <p>shop now</p>
        </a>
    </div>
  )
}

export default CatagoryCard


