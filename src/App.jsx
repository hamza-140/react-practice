import './App.css'
import HelloWorld from './HelloWorld'
import Counter from './Counter'
import List from './List'
import Api from './Api'
import Calculator from './Calculator'
import Timer from './Timer'
import Todo from './Todo'
import UploadImage from './UploadImage'
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
    <HelloWorld/>
    <Counter/>
    <List/>
    <Api/>
    <Calculator/>
    <Timer/>
    <Todo/>
    <button           onClick={()=>{navigate('/quote')}}
class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Quotes</span>
</button>
<UploadImage/>
    </>
  )
}

export default App;
