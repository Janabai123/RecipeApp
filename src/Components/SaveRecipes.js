// import React, { useState } from 'react'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'

// const SaveRecipes = () => {
//   const[data,setData]=useState([]);
//   const[activeTab,setActiveTab]=useState("instructions");
 

//   const getdata=()=>{
//   const check= localStorage.getItem('cartItem');
//   if(check){
//     setData(JSON.parse(check))
//   }
//   }
//   const removeRecipe=()=>{
//     localStorage.clear('cartItem');
//     setData('');
//   }
//   return (
  

    
//      <div>
// <DetailWrapper>
 
//       <div key={data.id}>
     
//      <h1>{data.title}</h1>
//         <img src={data.image} alt={data.title}></img>
//       </div>
//       <Info>
//       <button className='viewbtn' onClick={getdata}>view</button>
//       <Button className={activeTab === "instructions" ? "active" : ""} onClick={()=>setActiveTab("instructions")} >Instructions</Button>
//         <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=>setActiveTab("ingredients")} >Ingredients</Button>
//    <button onClick={removeRecipe} className='removebtn'>Remove</button>
        
//         {activeTab === "instructions"&& (
//           <div>
//             <h3 dangerouslySetInnerHTML={{__html:data.summary}}></h3>
//             <h3 dangerouslySetInnerHTML={{__html:data.instructions}}></h3>
//           </div>
//         )}

//         {activeTab === "ingredients" && (
//           <ul>{data.extendedIngredients.map((ingredient)=>
//             (
//               <li key={ingredient.id}>{ingredient.original}</li>
//             ))}</ul>
//         )}
//       </Info>
     

//     </DetailWrapper>
//    </div> 
//   )
// }
    
  

// const DetailWrapper=styled.div`
// margin-top:10rem;
// margin-bottom:5rem;
// display:flex;
// .active{
// color:white;
// background:linear-gradient(35deg,#494949,#313131)
// }
// h2{
//   margin-bottom:2rem;
// }
// li{
//   font-size:1.2rem;
//   line-height:2.5rem;
// }
// ul{
//   margin-top:2rem;
// }


// `

// const Button=styled.button`
// padding:1rem 2rem;
// color:#313131;
// border:2px solid black;
// margin-right:2rem;
// background:white;
// font-weight:600;
// `

// const Info=styled.div`
// margin-left:10rem;
// `

   

// export default SaveRecipes


