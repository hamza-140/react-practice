import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

function HelloWorld(){
	const [name,setName] = useState("_____")
	const [isToggled, setIsToggled] = useState(false);

	const handleChange = () => {
	  setIsToggled(!isToggled);
	  document.documentElement.style.setProperty(
      "--bg",
      isToggled ? "#242424" : "#454973"
    );
	};
	return (
		<div>
			<button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}`}>
      			<FontAwesomeIcon icon={isToggled ? faToggleOn : faToggleOff} />
    		</button>
			<h1>Hello World! by {name}</h1>
				<input
              className="formInput"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            	/>		
        </div>
	)
}

export default HelloWorld;
