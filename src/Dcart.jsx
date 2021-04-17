import React,{useState} from 'react';
import Dnavbar from "./Dnavbar";
import Button from '@material-ui/core/Button';
import Dcartitem from "./Dcartitem";
import Dbuycard from "./Dbuycard";
import Footer from "./Footer";





const Dcart=()=>{
	const [state,setstate]=useState("one");
	const changediv=(id)=>{
		setstate(id);
		console.log(state);

	}



	

	return(<>
		<Dnavbar/>
		<div className="container" style={{marginTop:"7%"}}>
			<div className="row">
				<h1 id="text_pink" style={{fontSize:'60px'}}>Cart</h1><br/>
				<div style={{border:'1px solid white',backgroundColor:'#2b0014'}} className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
								<Button style={{backgroundColor:'#570029',marginLeft:'8px',marginTop:'8px'}} id="text_white" onClick={e=>changediv('one')}>Items</Button>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
								<Button style={{backgroundColor:'#570029',marginLeft:'8px',marginTop:'8px'}} id="text_white" onClick={e=>changediv('two')}>Balance</Button>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
							
								<Button style={{backgroundColor:'#570029',marginLeft:'8px',marginTop:'8px'}} id="text_white" onClick={e=>changediv('three')}>Gift Cards</Button>
								
						</div>
					</div>
				</div><br/>
				{state=="one"?<div>	
				<Dcartitem img="https://cdn10.montecarlo.in/images/ProductImages/medium/2-kIf-113908-pA7.JPG" type="Monte carlo marron Tshirt" cost="1,270.00"/>
				<Dcartitem img="https://cdn10.montecarlo.in/images/ProductImages/medium/2-sUT-061747-pW2.JPG" type="Monte carlo Blue Tshirt" cost="975.00"/>
					

				</div>:state=="two"?<div>
				<hr id="text_white"/><br/>
					<div style={{border:'1px solid white',height:'150px',backgroundColor:'#2b0014',marginTop:'10px',textAlign:'center'}} className="container">
					<div className="row">
						<h1 style={{marginTop:'5%'}} id="text_white">0,00</h1>
					</div>
				</div><br/></div>:
				state=="three"?
				<div style={{border:'1px solid white',height:'150px',backgroundColor:'#2b0014',marginTop:'10px',textAlign:'center'}} className="container">
					<div className="row">
						<h1 style={{marginTop:'5%'}} id="text_pink">No Gift Cards.</h1>
					</div>
				</div>:null}

			</div>
		</div><br/>
		<Footer/>

		</>)
}

export default Dcart;
