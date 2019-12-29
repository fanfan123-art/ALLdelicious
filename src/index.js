import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './login/Login';
import Register from './register/Register';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import HomePage from './homepage/HomePage';
import Chuan from './homepage/chuan/Chuan'
import Zhe from './homepage/zhe/Zhe';

export default class Client extends React.Component{   
    render(){
     
        return(
            <div>
                <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path="/"exact component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                    <HomePage path='/HomePage' component={HomePage}/> 
                    <Route path="/register" component={Register}></Route>
                    <Route path="/chuan" component={Chuan}></Route>
                    <Route path="/zhe" component={Zhe}></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}


ReactDOM.render(<Client/>, document.getElementById('root'));
serviceWorker.unregister();
