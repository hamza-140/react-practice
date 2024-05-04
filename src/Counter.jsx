
import {useState} from 'react';

function Counter(){
	const [count,setCount] = useState(0)
	return (
	<div>
		<h2>{count}</h2>
		<button className="decrease" onClick={()=>{
			if(count>0){
				setCount(count-1)
			}}}>Decrease</button>
		<button className="increase" onClick={()=>{setCount(count+1)}}>Increase</button>
	</div>
	)
}

export default Counter;
