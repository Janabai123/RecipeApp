import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';



const Searched = () => {
    const[searched,setSearched]=useState([]);
    
    let params=useParams();
    
     const REACT_APP_API_KEY= '107a44bd6db146a2b784044f90bc393b';
    
    // const REACT_APP_API_KEY='3321c84814254ff1a454640613b5e1cf';
    
      const getSearched=async(name)=>{
        const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&query=${name}`);
        const recipes =await data.json();
        setSearched(recipes.results);
         console.log(setSearched(recipes.results))
    
      }
    
      useEffect(()=>{
        getSearched(params.search);
        console.log(params.search)
      },[params.search])
      return (
        <Grid>
        {searched.map((item)=>{
          return(
           <Card key={item.id}>
           <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title}></img>
            <h4>{item.title}</h4>
            </Link>
           </Card>
          )
        })}
        </Grid>
      )
    }
    
    const Grid=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;
    `
    
    const Card=styled.div`
    img{
      width:100%;
      border-radius:2rem;
    }
    a{
      text-decoration:none;
    }
    h4{
      text-align:center;
      padding:1rem;
    }
    `
export default Searched