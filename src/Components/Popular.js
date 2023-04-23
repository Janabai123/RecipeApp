import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

const Popular = () => {

    const[popular,setpopular]=useState([]);

    useEffect(()=>{
    getPopular();
},[]
    )
 
 
     const REACT_APP_API_KEY= '107a44bd6db146a2b784044f90bc393b';

    // const REACT_APP_API_KEY='3321c84814254ff1a454640613b5e1cf';

    const getPopular=async()=>{

        const check=localStorage.getItem('popular');
        if(check){
            setpopular(JSON.parse(check))
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=10`)
        
            const data=await api.json()
            console.log(data);
            localStorage.setItem("popular",JSON.stringify(data.recipes))
            setpopular(data.recipes);
        }
       
    }
  return (
   
    <div>
      
            <Wrapper>
            <h3>Popular pics</h3>
           
            <Splide options={{
                perPage:3,
                arrows:true,
                pagination:false,
                drag:'free',
                gap:'3rem'
            }}>
            {popular.map((recipe)=>{
                return(
                    <SplideSlide key={recipe.id}>
           <Card>
           <Link to={"/recipe/"+recipe.id} >
           <p>{recipe.title}</p>
           <img src={recipe.image} alt={recipe.title}></img>
          <Gradient />
         </Link>
           </Card>
           </SplideSlide>
                )
            })}
            </Splide>
            </Wrapper>
      
    </div>
  )
}
const Wrapper=styled.div`
margin:4rem,0rem;`

const Card=styled.div`
min-height:25rem;
overflow:hidden;
border-radius:2rem;
position:relative;

img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    height:40%;
    font-weight:600;
    font-size:1rem;
    display:flex;
    align-items:center;
    justify-content:center;

}
`
const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`

export default Popular