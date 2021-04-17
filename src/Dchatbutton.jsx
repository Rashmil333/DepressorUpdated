import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Dchatbutton=(props)=>{
	const [del,setdel]=useState(1);
	const delitem=()=>{
		setdel(del+1);
		

	}
	const deletemessage=()=>{
		props.outdelete(props.id);

	}
	return(<>{del%2==0?<Button style={{float:'right',color:'crimson'}} onClick={deletemessage}><DeleteForeverIcon/></Button>:null}<Button style={{float:'right'}} id="Dchatmessage" onClick={delitem}>{props.text}</Button><br/><Button id="Dchatmessage">{props.text}</Button><br/></>);
}

export default Dchatbutton;