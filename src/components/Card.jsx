import React from 'react'

const Card=(props)=>{
 return( 
<div className="ns-wrapper">
<h1 data-ns-test="project-name">{props.name}</h1>
<h6 data-ns-test="project-description">{props.desc}</h6>
</div>
   )

}
export default Card;


