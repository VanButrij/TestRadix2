import React from 'react';
import './App.css';
import MainPageContainer from './Components/MainPage/MainPageContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { Route } from 'react-router';
import AddPageContainer from './Components/AddPage/AddPageContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Route exact path='/'render={ () => 
          <>
            
            <HeaderContainer />
            <MainPageContainer />
          </> }/>
        <Route path='/add'render={ ()=>
              <AddPageContainer />}/>
        
      </BrowserRouter>
        
    </div>
  )
}

export default App;
