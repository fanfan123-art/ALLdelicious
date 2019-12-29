import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './login/Login';
import Register from './register/Register';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import HomePage from './homepage/HomePage';
import Chuan from './homepage/chuan/Chuan';
import Zhe from './homepage/zhe/Zhe';
import Lu from './homepage/lu/Lu';
import Hui from './homepage/hui/Hui';
import Min from './homepage/min/Min';
import Su from './homepage/su/Su';
import Xiang from './homepage/xiang/Xiang';
import Yue from './homepage/yue/Yue';


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
                    <Route path="/lu" component={Lu}></Route>
                    <Route path="/hui" component={Hui}></Route>
                    <Route path="/min" component={Min}></Route>
                    <Route path="/su" component={Su}></Route>
                    <Route path="/xiang" component={Xiang}></Route>
                    <Route path="/yue" component={Yue}></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}


ReactDOM.render(<Client/>, document.getElementById('root'));
serviceWorker.unregister();
