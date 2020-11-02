import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType, StoreType,} from "./Redux/state";




const App:  React.FC<{store: StoreType, state: RootStateType}> =
    ({state, store}) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                < Navbar/>
                <div className='app-wrapper-content'>

                    <Route path = '/dialogs' render={() => < Dialogs store={store} />}/>
                    <Route path = '/profile' render={() => < Profile profilePage = {state.profilePage}
                                                                     dispatch={store.dispatch.bind(store)}
                                                            />}/>

                </div>
            </div>
        </BrowserRouter>)
}



export default App;
