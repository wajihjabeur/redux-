import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {addTask} from './Redux/Actions/Action'
import{useState} from 'react'
import List from './component/List';

function App() {
  // njibou biha el function
  const dispatch = useDispatch()
  // creaction mta3 state jdida
  const [newText, setNewText] = useState('')
  const [all, setAll] = useState(true)
 
  //njibou biha state ml reducer
  const todos = useSelector(state => state.todos)
  return (
    <div className="todolist">
    <div className="heading">
        <h1 className="title">To-Do List</h1>
    </div>
        <input
            type="text"
            onChange={(e)=> setNewText(e.target.value)}
            value={newText}
            />
 
        <button onClick={()=>{if(newText!=''){dispatch(addTask({id:Math.random(),isDOne:false,text:newText}));setNewText('')}else{alert('text required')}}}>Add</button>
       <button onClick={()=>setAll(!all)}>{all?'ALL':'DONE'}</button>
    <div className="items">
      <ul>
          
        {all?todos.map(el=><List item={el}/>):todos.filter(el=>el.isDone==true).map(el=><List item={el}/>)}
         
      </ul>
    </div>
</div>
    
  );
}

export default App;
