import { useState } from 'react'
import './TodoItem.css'
import { todo } from 'node:test'

const TodoItem = () => {
    const date = new Date().toDateString()
    const [search, setSearch] = useState()

    const onChangeSearch = (e) => {
        setSearch(e.target.vlaue)
    }

    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) =>
            it.content.toLowerCase().includes(search.toLowerCase())
        )
    }
    return (
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type="checkbox" />
            </div>
            <div className='title_col'>할 일</div>
            <div className='date_col'>{date}</div>
            <div className='btn_col'>
                <button>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem