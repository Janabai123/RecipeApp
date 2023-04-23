
import './App.css';
import Category from './Components/Category';
import Home from './Pages/Home';
import Cuisine from './Pages/Cuisine';
import Search from './Components/Search';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Searched from './Pages/Searched'
import Recipe from './Pages/Recipe';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
// import SaveRecipes from './Components/SaveRecipes';

// import { useAuth0 } from '@auth0/auth0-react';


function App() {
  // const{isAuthenticated}=useAuth0()

  return (
   <>
    <BrowserRouter>
    <Nav>
    <GiKnifeFork />
      <Logo to='/'>Deliciouss</Logo>
    </Nav>

    
    <Search />
    <Category />
   
    <Routes > 
        <Route exact path = "/" Component={Home }/>
        </Routes>
    
    {/* {isAuthenticated && ( */}
     
      <Routes >
            <Route path = "/cuisine/:type" Component={Cuisine }/>
        
    
          <Route path="/searched/:search" Component={Searched} />
      
  
      <Route path="/recipe/:name" Component={Recipe}/>
      {/* <Route path ="/saverecipes"  Component={SaveRecipes}/>  */}
      </Routes>
     {/* )
     } */}
   
    </BrowserRouter>
   </>
  );
}

const Logo=styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family:'Lobster Two',cursive;
`
const Nav=styled.div`
padding:4rem,0rem;
margin-top:2rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem;
}
`
export default App;
