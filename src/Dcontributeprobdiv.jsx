import React,{useState} from 'react';

const Dcontributeprobdiv=(props)=>{

	const [expand,setexpand]=useState(false);
	const call=()=>{
		
		setexpand(!expand);
	}

	
	return(<>
				<div><img onClick={call} id={expand==true?"contributephotoexpand":"contributephoto"} src={props.img}/>
				<b>{props.name}</b><br/>
				
				{props.text}
				</div><hr/>
		</>)
}

export default Dcontributeprobdiv;