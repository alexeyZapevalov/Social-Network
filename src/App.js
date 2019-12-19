import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/Music/Music';
import Settings from './components/settings/Settings';
import {Route} from 'react-router-dom'



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper__content'>
          <Route path='/profile' 
            render={ () => <Profile 
              profile={props.state.profile} 
              dispatch={props.dispatch} />}
               />
          <Route path='/dialogs' 
            render={ ()=> <Dialogs 
              store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
};



export default App;
