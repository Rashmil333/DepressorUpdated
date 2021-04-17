import React from "react";
import Button from '@material-ui/core/Button';


const Dcardreliever=(props)=>{

	const call=()=>{
		props.outshow(props.id);
	}
	return(<>
		<div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
			<div className="card"  id="cardreliever">
				<img src={props.img} className="card-img"/>
				<div className="card-body">
					<h4>{props.heading}</h4>
					<h5>{props.descript}</h5>
					<Button style={{backgroundColor:'skyblue',}} onClick={call}>Learn</Button>

				</div>
			</div>
		</div>

		</>);
}

export default Dcardreliever;