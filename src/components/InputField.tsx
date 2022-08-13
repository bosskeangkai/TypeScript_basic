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
// try to loading this file to github
// test updating  
// test this config 
export default InputField