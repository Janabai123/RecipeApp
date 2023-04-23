import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import{GiNoodles,GiChopsticks} from 'react-icons/gi';
// import { useAuth0 } from '@auth0/auth0-react';

const Category = () => {
  // const { loginWithRedirect,logout,isAuthenticated ,user} = useAuth0();
 
  return (
    <div>
        <List>
        <SLink to='/cuisine/Italian'>
            <FaPizzaSlice />
            <h1>Italian</h1>
            </SLink>
            <SLink to='/cuisine/American'>
            <FaHamburger />
            <h1>American</h1>
            </SLink>
            <SLink to='/cuisine/Thai'>
            <GiNoodles />
            <h1>Thai</h1>
            </SLink>
            <SLink to='/cuisine/Chinese' >
            <GiChopsticks />
            <h1>Chinese</h1>
            </SLink>
            {/* <SLink to='/saverecipes'><h1>SaveRecipes</h1>
          </SLink> */}
          
            {/* {isAuthenticated && <div><h4>{user.name}</h4>
            <img src={user.profile} alt={user.name} />
            </div>}
            {isAuthenticated ?   (<SLink to ='/'><h1 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </h1></SLink>)
    :(<SLink to ='/'><h1 onClick={() => loginWithRedirect()}>Log In</h1></SLink>)
    } */}
            
         
        </List>
    </div>
  )
}
const List=styled.div`
display:flex;
flex-direction:row;
justify-content:center;

margin: 0rem 2rem;`
const SLink=styled(Link)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
width:8rem;
height:8rem;
background:linear-gradient(35deg, #494949, #313131);
color:white;
cursor:pointer;
transform:scale(0.8);
${'' /* font-size:5rem; */}
h1{
  color:white;
  font-size:20px;
}
svg{
  color:white;
  font-size:1.5rem;

}
&.active{
background:linear-gradient(to right, #f27121,#e94057 );
svg{
  color:white;
}
h1{
  color:white;
}
}

`

export default Category