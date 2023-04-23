import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';


const Recipe = () => {
  const[details,setDetails]=useState([]);
 

  const[activeTab,setActiveTab]=useState("instructions");
//  let navigate=useNavigate();
  


  let params=useParams();

    const REACT_APP_API_KEY= '107a44bd6db146a2b784044f90bc393b';
  
  // const REACT_APP_API_KEY='3321c84814254ff1a454640613b5e1cf';

  const fetchDetails=async()=>{
   
  const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${REACT_APP_API_KEY}`)
  const detailsData=await data.json();

setDetails(detailsData);


  localStorage.setItem('cartItem',JSON.stringify(detailsData))
 
  }

useEffect(()=>{
  fetchDetails();
},[params.name])

// const handleAddProduct=()=>{

//   navigate('/saverecipes');
 
//   }

 



  return (
    <DetailWrapper> 

   
      <div>
        <h1>{details.title}</h1>
        <img src={details.image} alt={details.title}></img>
      
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={()=>setActiveTab("instructions")} >Instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=>setActiveTab("ingredients")} >Ingredients</Button>
      
        {/* <Button  onClick={()=>handleAddProduct()}>Save</Button> */}
      

        {activeTab === "instructions"&& (
          <div>
            <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>{details.extendedIngredients.map((ingredient)=>
            (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}</ul>
        )}
      </Info>
     

    </DetailWrapper>
    
  )
}

const DetailWrapper=styled.div`
margin-top:10rem;
margin-bottom:5rem;

display:flex;

.active{
color:white;
background:linear-gradient(35deg,#494949,#313131)
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  margin-top:2rem;
}


`

const Button=styled.button`
padding:1rem 2rem;
color:#313131;
border:2px solid black;
margin-right:2rem;
background:white;
font-weight:600;
`

const Info=styled.div`
margin-left:10rem;
`

export default Recipe