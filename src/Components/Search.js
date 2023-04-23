import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const[input,setInput]=useState('');
    let navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/" + input)
        console.log(e.value)
    
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
            <input type='text' placeholder='Search..' onChange={(e)=>setInput(e.target.value)} value={input} ></input>
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
margin:0rem,2rem;
div{
width:100%;
position:relative;
}
input{
    border:none;
margin-left:300px;
width:20%;
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
    padding:1rem 10rem;
    font-size:1.5rem;
    border-radius:1rem;
    outline:none;

}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(1005,-50%);
    color:white;

}
`

export default Search