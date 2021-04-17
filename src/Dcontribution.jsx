import React from 'react';
import Dnavbar from "./Dnavbar";
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Dcard from "./Dcard";
import Footer from "./Footer";
import Dcontributeprobdiv from "./Dcontributeprobdiv";
import Dcontributedata from "./Dcontributedata";

const Dcontribution=()=>{

	const validation=()=>{
		var help=document.getElementById('Dcomment').value;
		if(help==""){alert('Sorry We dont get it.Write it Again!!!')}
		else{alert(`Your story is recorded Thanks!!!~${help}`)}
	}
	return(<>
			<Dnavbar/>	

			<div className="container" id="text_white">
				<div className="row" >
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"id="contributionprob">
					
						{Dcontributedata.map((cvalue)=>{
							return(<Dcontributeprobdiv name={cvalue.name} text={cvalue.text} img={cvalue.img}/>);
						})}

						

					</div>
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" style={{textAlign:'center'}}>
							<h1 id="text_pink">More Contribute More <span >Peace</span></h1>
							<p id="text_pink">We are for you so ask freely for any kind of help.
							<br/>Whether it is financial help or any other product base help.
							This is your family!!!</p><br/><br/>
							<textArea id="Dcomment" type="text" placeholder="Ask for help" style={{height:'140px'}}/>
							<br/><Button id="Dsendbut" onClick={validation}>Send</Button><br/><br/>
							<p id="text_pink">1: You can contribute money.<br/>
							<a href="https://paytm.com/offers/bhimupi.html"><img src="https://image01.realme.net/general/20190821/1566357380566.jpg" style={{width:'40%'}}/></a><br/>
							2: You can contribute a gift for 
							someone via amazon,flipkart etc</p>
								<a href="https://www.amazon.in/"><img style={{width:'40%'}} src="https://www.visionmate.se/en/wp-content/uploads/sites/2/2020/09/wiXtq4NPpGbNf6PEHTT4hg.jpg"/></a>
								<a href="https://www.flipkart.com/"><img style={{width:'40%',marginLeft:'15px'}} src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/flipkart-1591698402.jpg"/></a>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" style={{textAlign:'center'}}>
							<h1 id="text_pink">Contribute by downloading the Apps by us.Check these</h1>
			<img id="contributeapp" style={{width:'40%'}} src="http://allaboutwindowsphone.com/images/flow/apps/weather/weather1.jpg"/>
			<img id="contributeapp" style={{width:'40%',height:'38%',marginLeft:'10px'}} src="https://i.pinimg.com/originals/11/2d/d1/112dd1b57e9ec023f60eb37d4db116bf.png"/><br/><br/><br/>
			<img id="contributeapp" style={{width:'40%'}} src="https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png"/>
			<img id="contributeapp" style={{width:'40%',height:'19%',marginLeft:'10px',marginTop:'6px'}} src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1451970261/c3wxrwtvwokmz7l7ptqu.png"/>
						
					</div>
				</div>
			</div>
			<Footer/>	

			
		</>)
}

export default Dcontribution;