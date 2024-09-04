import { useState } from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todo, onUpdate, onDelete}) => {
    const [search,setSearch] = useState('')
    console.log(search)
    return (
        <div className='TodoList'>
            <h3>Todo List 🌱</h3>
            <input type="text" className='searchbar' placeholder='검색어를 입력해주세요.' onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <div className="list_wrapper">
            </div>
        </div>
    )
}

export default TodoList