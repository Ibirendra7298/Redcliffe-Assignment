import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

	const Card=(props)=>{
	let str=`card text-center bg-${props.data.color}`;
	return (
		<div class={str} style={{height:'100%', padding:'30px 20px'}}>
			<i class="flaticon-laboratory"></i>
			<div class="card-body">
				<h5 class="card-title" style={{fontWeight:'bold'}}>{props.data.title}</h5>
				<p class="card-subtitle" style={{fontSize:'0.9em'}}>{props.data.content}</p>
			</div>
		</div>
	)
}

export default Card;