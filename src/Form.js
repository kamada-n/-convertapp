import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState('')

    const state = {
            val_left:"",
            val_right:"",
            val_sum:0
    }
    function doChangeLeft(e) {
        // e.preventDefault()
        let sum = Number(e.target.value) * 15 + Number(state.value_right) * 5
        setValue({
            val_left: e.target.value,
            val_sum: sum
        })
    }
    function doChangeRight(e) {
        let sum = Number(state.val_left) * 15 + Number(e.target.value) * 5
        setValue({
            val_right: e.target.value,
            val_sum: sum
        })
    }
    return (
        <form>
            <input type='number'
                // placeholder="数字"
                value={value.val_left}
                step='0.5'
                onChange={doChangeLeft}
            />
            <p>g  小さじ</p>
             <input type='number'
                // placeholder="数字"
                value={value.val_right}
                step='0.5'
                onChange={doChangeRight}
            />
            <p>=</p>
            <p>{value.val_sum}</p>
        </form>
    )
}

export default Form