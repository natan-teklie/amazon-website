import React from 'react'
import { MdMenu } from "react-icons/md";
import classes from './Hh.module.css'

const HhLower = () => {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li><MdMenu /><p>All</p></li>
            <li>abcdefghi</li>
            <li>abcdefghi</li>
            <li>abcdefghi</li>
            <li>abcdefghi</li>
            <li>abcdefghi</li>
        </ul>
    </div>
  )
}

export default HhLower