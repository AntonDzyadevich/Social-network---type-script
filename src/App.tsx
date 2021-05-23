import React, { Suspense } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from 'redux';
import store, {RootStateType} from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";




const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const  ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));




type MapDispatchPropsType = {
    initializeApp: () => void
}
type MapStatePropsType = {
    initialized: boolean
}


class App extends React.Component<MapDispatchPropsType & MapStatePropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }



        return (
                <div className='app-wrapper'>
                    < HeaderContainer/>
                    < Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => < UsersContainer/>}/>
                        <Route path='/login' render={() => < LoginPage/>}/>

                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    initialized: state.app.initialized
})


const AppContainer =  compose<React.ComponentType>(
    withRouter,
    connect<MapStatePropsType, {}, MapDispatchPropsType, RootStateType>
    (mapStateToProps, {initializeApp}) ) (App) ;

const SamuraiJSApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;