import React from 'react';

	const Card2=(props)=>{
	let str=`card text-center bg-${props.data.color}`;
	return (
		<div class={str} style={{height:'100%', padding:'30px 20px'}}>
			<i class="flaticon-laboratory"></i>
			<div class="card-body">
				<h5 class="card-title" style={{fontWeight:'bold', marginBottom:'10%'}}>{props.data.title}</h5>
				{
					props.data.list.map((dat)=>{
						return(
							<p class="card-subtitle" style={{fontSize:'0.9em', marginBottom:'8%'}}>{dat}<br></br></p>
						)
					})
				}
			</div>
				<h3 style={{textDecoration:'line-through'}}>{props.data.oldPrice}</h3>
				<br></br>
				<h2>{props.data.newPrice}</h2>
				<br></br>
				<button className="btn btn-lg" style={{marginTop:'5%', padding:'5% 5%'}}>Know More</button>
		</div>
	)
}

export default Card2;