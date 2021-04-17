import React from 'react';
import Button from '@material-ui/core/Button';


const Dbuyitemopen=(props)=>{
	const callgoback=()=>{
		props.backo();
	}
	return(<>
		<div className="container">
			<div className="row">
				<div className="col-xl-2 col-lg-2">

				</div>
				<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
					<img src={props.img}/>

				</div>
				<div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12" id="text_white">
					<label>Customer Name</label><br/>
					<input  type="text" placeholder="Full name"/><br/>
					<label>Mobile Number</label><br/>
					<input type="number" placeholder="digit"/><br/>
					<label>Address</label><br/>
					<textArea type="text" placeholder="Colony,Pincode,City,State" id="Dcomment"/><br/>
					<p id="text_white"><b>{props.type}<br/>Rs {props.cost}</b></p>
					<Button style={{backgroundColor:'pink'}} id="text_pink">Buy</Button>
					<Button style={{backgroundColor:'pink',marginLeft:'20px'}} id="text_pink" onClick={callgoback}>Go Back</Button>

				</div>
			</div>
		</div>

		</>)
}

export default Dbuyitemopen;