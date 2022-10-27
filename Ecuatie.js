import React from 'react';
import EachEQ from './Eq';
import Final from './fnl'
import './eq.css';
import { useState , useRef ,useEffect} from 'react';


const Ecuatie = (props) => {
const [rezolva,setRezolva]=useState(false)
const amTerminat= () =>{
setRezolva(true);
}

return (    
<>
    <div className='topDiv'>{props.userName}, rezolva ecuatiile te rog!</div>
    <>{props.arrNum1.map((equat,index) => <EachEQ equat={equat} className={'eqc'}
                                     arrNum1={props.arrNum1} index1={index}
                                    rezolva={rezolva} key={index}/>)}</>
    
    <>{rezolva? <>
                <Final arrNum1={props.arrNum1}/>
                <button className={'button'} onClick={()=>props.startGame(false)}>Reincepe!</button>
                </>
    :<button className={'button'}onClick={()=>amTerminat(true)}>Am terminat!</button>}</>
</>)

}
 export default Ecuatie
