import React,{useState} from 'react';
import Dnavbar from "./Dnavbar";
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import Ddatadepress from "./Ddatadepress";
import Ddatastress from "./Ddatastress";
import Ddataanxiety from "./Ddataanxiety";
import Ddatatension from "./Ddatatension";
import Ddatasuicide from "./Ddatasuicide";
import Dlibutton from "./Dlibutton";
import MessageIcon from '@material-ui/icons/Message';
import CategoryIcon from '@material-ui/icons/Category';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import BrushIcon from '@material-ui/icons/Brush';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SendIcon from '@material-ui/icons/Send';
import UndoIcon from '@material-ui/icons/Undo';
import Dchatbutton from "./Dchatbutton";
import Footer from "./Footer";
import DeleteIcon from '@material-ui/icons/Delete';




const Dchat=()=>{

	const [toggler,settoggler]=useState(2);
	const [text,settext]=useState(1);
	const [depress,setdepress]=useState(1);
	const [stress,setstress]=useState(1);
	const [anxiety,setanxiety]=useState(1);
	const [tension,settension]=useState(1);
	const [suicide,setsuicide]=useState(1);
	const [emoji,setemoji]=useState(1);
	const [theme,settheme]=useState(1);
	const [family,setfamily]=useState(1);
	const [totalmessages,settotalmessages]=useState(1);
	const [chats,setchats]=useState([]);
	const [inputlist,setinputlist]=useState();
	const [themee,setthemee]=useState("");

	

	const changeinput=(event)=>{
		setinputlist(event.target.value);
		console.log(inputlist);
	}

	const createemojibutton=(id)=>{
		var btn=document.createElement("BUTTON");
		var t=document.createTextNode('&times;');

		btn.appendChild(t);
		document.getElementById('para').appendChild(btn);



	}

	const changethemee=(id)=>{
		if(id=='red'){
			setthemee("red");
		}
		else if(id=='green'){
			setthemee("green");
		}
		else if(id=='yellow'){
			setthemee("yellow");
		}
		else if(id=='dodgerblue'){
			setthemee("dodgerblue");
		}
		else if(id=='blue'){
			setthemee("blue");
		}

	}

	
	const displaymessage=()=>{
			setchats((olditem)=>{
			return[...olditem,inputlist];
		});
		console.log(chats);
		setinputlist("");

	}
	const displaymessageforli=(id)=>{
			setchats((olditem)=>{
			return[...olditem,id];
		});
		console.log(chats);
		setinputlist("");

	}
	const undomessage=()=>{
		var lastindex=(chats.length)-1;
		setchats((olditem)=>{
			return olditem.filter((arrelem,index)=>{
				return index!==lastindex;
			})
		})
	}

	const deletebutton=(id)=>{
		setchats((olddata)=>
		olddata.filter((cuurdata,indx)=>{
			return indx !==id;
		})
	)
	}

	const deleteall=()=>{
		setchats([]);

	}
	return(<>
		
				<Dnavbar/>
				<Button onClick={()=>settoggler(toggler+1)} style={{color:'white'}}><BuildIcon/></Button>
				<div >
				{toggler%2==0?
					<div style={{float:'left',color:'white',marginLeft:'2px',width:'300px'}}>
						<span id="text_white" style={{marginLeft:'10px'}}>Tools<hr style={{width:'200px',height:'2px'}}/></span><br/>
						<span id="text_white"><Button id="text_white" onClick={()=>settext(text+1)}><MessageIcon id="text_white"/>Messages</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{text%2==0?<ul style={{listStyleType:'none'}}>
								<li><Button id="text_white" onClick={()=>setdepress(depress+1)}><CategoryIcon id="text_white"/>Depression</Button>
								  {depress%2==0?
									<ul>
										{Ddatadepress.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index}/>);})}
									</ul>:null
								   }
								</li><hr style={{width:'200px',height:'2px'}}/>
								<li><Button id="text_white" onClick={()=>setstress(stress+1)}><CategoryIcon id="text_white"/>Stress</Button>
									 {stress%2==0?
									<ul>
										{Ddatastress.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index}/>);})}
									</ul>:null
								   }
								  </li><hr style={{width:'200px',height:'2px'}}/>
								<li><Button id="text_white"onClick={()=>settension(tension+1)}><CategoryIcon id="text_white"/>Tension</Button>
									 {tension%2==0?
									<ul>
										{Ddatatension.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index}/>);})}
									</ul>:null
								   }
								  </li><hr style={{width:'200px',height:'2px'}}/>
								<li><Button id="text_white" onClick={()=>setanxiety(anxiety+1)}><CategoryIcon id="text_white"/>Anxiety</Button>
									 {anxiety%2==0?
									<ul>
										{Ddataanxiety.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index}/>);})}
									</ul>:null
								   }
								  </li><hr style={{width:'200px',height:'2px'}}/>

								<li><Button id="text_white"onClick={()=>setsuicide(suicide+1)}><CategoryIcon id="text_white"/>Suicidial Thoughts</Button>
									 {suicide%2==0?
									<ul>
										{Ddatasuicide.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index}/>);})}
									</ul>:null
								   }
								 </li>

							</ul>:null
						}
						<span id="text_white"><Button id="text_white"onClick={()=>setemoji(emoji+1)}><EmojiEmotionsIcon/>Emojis</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{emoji%2==0?<ul id="text_white" style={{listStyleType:'none'}}>
							<li><Button id="text_white"  onClick={e=>displaymessageforli("Good Mood")}><EmojiEmotionsIcon/></Button></li>
							<li><Button id="text_white"  onClick={e=>displaymessageforli("Bad Mood")}><MoodBadIcon/></Button></li>
							<li><Button id="text_white" onClick={e=>displaymessageforli("Sentiment SentimentSatisfied")} ><SentimentSatisfiedIcon/></Button></li>
							<li><Button id="text_white"  onClick={e=>displaymessageforli("Sentiment Dissatisfied")} ><SentimentDissatisfiedIcon/></Button></li>
							<li><Button id="text_white"  onClick={e=>displaymessageforli("SentimentVeryDissatisfied")} ><SentimentVeryDissatisfiedIcon/></Button></li>
							
							</ul>:null
						    }
						<span id="text_white"><Button id="text_white"onClick={()=>settheme(theme+1)}><BrushIcon/>Themes</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{theme%2==0?<ul id="text_white" style={{listStyleType:'none'}}>
							<li><Button style={{color:'dodgerblue'}} onClick={e=>changethemee('dodgerblue')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'blue'}}onClick={e=>changethemee('blue')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'red'}}onClick={e=>changethemee('red')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'green'}}onClick={e=>changethemee('green')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'yellow'}}onClick={e=>changethemee('yellow')}><CheckBoxOutlineBlankIcon/></Button></li>

							</ul>:null
						    }
						<span id="text_white"><Button id="text_white"onClick={()=>setfamily(family+1)}><FaceIcon/>Family Members</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{family%2==0?<ul id="text_white" style={{listStyleType:'none'}}>
							<li><Button id="text_white">Harry</Button></li>
							<li><Button id="text_white">Ramesh</Button></li>
							<li><Button id="text_white">Sonia</Button></li>
							<li><Button id="text_white">Diljeet</Button></li>
							<li><Button id="text_white">Tom</Button></li>
							</ul>:null
						    }
						<span id="text_white"><Button id="text_white"><ForumIcon/>Messages Send:0</Button><hr style={{width:'200px',height:'2px'}}/></span>
						<span id="text_white"><Button id="text_white"><ForumIcon/>Messages Recieved:0</Button><hr style={{width:'200px',height:'2px'}}/></span>
						<span id="text_white"><Button id="text_white"><NotificationsIcon/>Notifications:0</Button><hr style={{width:'200px',height:'2px'}}/></span>
							
				</div>:null
				}
				<div className={themee == "red" ? "Dchatredbackground" : themee == "green" ? "Dchatgreenbackground":themee=="yellow"? "Dchatbackgroundyellow":themee=="blue"?
				"Dchatbackgroundblue":themee=="dodgerblue"?"Dchatbackgroundskyblue" : null} style={{color:'white',height:'800px',color:'grey',}}>
				
					<Button id="text_white" style={{float:'right'}} onClick={deleteall}><DeleteIcon/></Button><br/><br/>
					{chats.map((cvalue,index)=>{
						return(<Dchatbutton text={cvalue} id={index} outdelete={deletebutton}/>);
					})}
					<input id="Dchatinput" type="text" placeholder="Type Message" value={inputlist}  onChange={changeinput}/>
					<Button id="Dchatbutton" style={{position:'fixed',bottom:'0',right:'0',color:'green',backgroundColor:'white',marginLeft:'10px'}} onClick={undomessage}><UndoIcon/></Button>
					<Button id="Dchatbutton" style={{position:'fixed',bottom:'0',marginLeft:'65%',color:'green',backgroundColor:'pink'}} onClick={displaymessage}><SendIcon/></Button>
		
				
				</div>

				</div>
				<Footer/>
		</>)
}

export default Dchat;