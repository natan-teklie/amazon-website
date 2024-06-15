import React from 'react'
import {catagoryInfo} from './CatagoryFullInfo'
import CatagoryCard from './CatagoryCard'

function Catagory() {
  return (
    <section>
        {
            catagoryInfo.map((infos)=>{
                <CatagoryCard data = {infos}/>
            })
        }
    </section>
  )
}

export default Catagory