import React from 'react'
import { useRef } from 'react';
import "./style.css";

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}

const InputField = ({ todo, setTodo, handleAdd }:Props) => {
    // useref
    const inputRef=useRef<HTMLInputElement>(null)
    return (
        <form className='input' onSubmit={(e)=>{
            handleAdd(e);
            inputRef.current?.blur(); //make the window back to light
        }}>
            <input 
                ref={inputRef}
                type="input" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                placeholder='Enter your task' 
                className='input_box'
            />
            <button className='input_submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField
// last time double check