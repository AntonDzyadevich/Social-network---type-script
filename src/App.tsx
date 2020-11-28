import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType, StoreType} from './types/entities';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App:  React.FC<{store: StoreType, state: RootStateType, dispatch: (action: ActionsTypes) => void}> =
    ({state, store, dispatch}) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                < Navbar/>
                <div className='app-wrapper-content'>
                    <Route path = '/dialogs' render={() => < DialogsContainer store={store} />}/>
                    <Route path = '/profile' render={() => < Profile store={store} />}/>
                </div>
            </div>
        </BrowserRouter>)
}



export default App;
