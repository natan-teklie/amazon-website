import React from 'react'

function CatagoryCard(data) {
  return (
    <div>
        <a href=""><span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
        </a>
    </div>
  )
}

export default CatagoryCard