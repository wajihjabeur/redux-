import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask,doneTask} from '../Redux/Actions/Action'
import Edit from './Edit'

function List({item}) {
    const dispatch = useDispatch()
    return (
        <div className='item'>
            <li className={item.isDone?'done':null}>{item.text}</li>
            <button onClick={()=> dispatch(deleteTask(item.id))}>Delete</button>
            <Edit item={item}/>
            <button className={item.isDone?'gdone':'rdone'} onClick={()=>dispatch(doneTask(item.id))}>{item.isDone?'done':'undone'}</button>
        </div>
    )
}

export default List
