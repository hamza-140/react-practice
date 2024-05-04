import { useState } from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todo() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItemToList = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  const removeItem = (itemToRemove) => {
    const updatedList = list.filter((item) => item !== itemToRemove);
    setList(updatedList);
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
        <li key={index}>
          {item}
          <button className="remove" onClick={() => removeItem(item)}>
            <FontAwesomeIcon icon={faTrash} color="red" />
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todo;
