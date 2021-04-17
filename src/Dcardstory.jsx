import React from 'react';
import Dstoryphoto from "./Dstoryphoto";
import { Progress } from 'reactstrap';


const Dcardstory=(props)=>{
	return(<>
		
		<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
		
					<div className="card" id="card_feel" >
					
						<div className="card-body">
							<p id="text_pink">Story#1</p>
							<hr style={{color:'black'}}/>

							<p id="text_pink">{props.story}
							<br/>{props.email}~~<br/></p>
							<br/>
							<div>
								<div style={{float:'left'}}>
									<Dstoryphoto img="https://st2.depositphotos.com/2931363/6819/i/600/depositphotos_68197553-stock-photo-handsome-young-man-making-selfie.jpg"/>
								</div>
								<div style={{float:'right'}}>
										<Dstoryphoto img={props.imgr}/>
								</div>
							</div>




							
							
						
							
						</div>
					</div>
		
		</div>
							
				 
	

		</>)
}

export default Dcardstory;