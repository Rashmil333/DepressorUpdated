import React from "react";
import Dcart from "./Dcart";


const Dbuycard =(props)=>{

	const call=()=>{
		props.callitem(props.img,props.type,props.cost);
	}
	


	return(<>
				<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
	  				<div className="card" id="card_feel" style={{border:'none',width:'300px'}} onClick={call} >
	  					<img style={{height:'400px',width:'300px'}} src={props.img} className="card-img"/>
						<div className="card-body">
							<b style={{color:'black'}}>{props.type}<br/>
							Rs {props.cost}</b><br/>
						

							
						</div>
					</div>
				</div>
		</>);
}

export default Dbuycard;