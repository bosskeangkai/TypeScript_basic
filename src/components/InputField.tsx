import React from 'react'
import "./style.css";
const InputField = () => {
    return (
        <form className='input'>
            <input type="input" placeholder='Enter your task' className='input_box'/>
            <button className='input_submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField