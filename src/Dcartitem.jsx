import React from 'react';
import Button from '@material-ui/core/Button';

const Dcarditem=(props)=>{
	return(<>
				<div style={{border:'1px solid white',backgroundColor:'#2b0014',marginTop:'10px'}} className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
								<img style={{width:'100px'}} src={props.img}/>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-5 col-sm-3 col-3">
								<b id="text_white">{props.type}<br/>Rs {props.cost}</b>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
								<Button style={{backgroundColor:'#16000a',marginLeft:'8px',marginTop:'8px'}} id="text_white">Buy</Button>
								<Button style={{backgroundColor:'#16000a',marginLeft:'8px',marginTop:'8px'}} id="text_white">Remove</Button>
						</div>
					</div>
				</div><br/>
				

		</>);
}

export default Dcarditem;