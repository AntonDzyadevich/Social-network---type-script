import {RootStateType} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/state";



const renderTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App store={store}  state={state}/>
        </React.StrictMode>,
        document.getElementById('root'));
}


renderTree(store.getState())
store.subscribe(renderTree)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
