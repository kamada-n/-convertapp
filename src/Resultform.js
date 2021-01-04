import React, { useState } from 'react'

const Resultform = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                // placeholder="数字"
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Resultform