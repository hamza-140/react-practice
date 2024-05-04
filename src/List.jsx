import {useState} from 'react'

function List(){
	const [item, setItem] = useState("");
  const [list, setList] = useState([1,"Yes"]);

  const addItemToList = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem(""); // Clear input field after adding
    }
  };

  return (
    <div>
      <input
        className="formInput"
        placeholder="Enter Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="add" onClick={addItemToList}>
        ADD
      </button>

        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      
    </div>
  );
}

export default List;
