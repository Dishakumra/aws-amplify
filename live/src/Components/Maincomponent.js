
import React,{Component} from 'react';

import Header from './Header';
import Navigationbar from './Navigationbar';
import Books from './Books';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

render(){
  return (
    <div>

     <Header/>
     <Navigationbar/>
     <Books/>
    </div>
  );
}
}

export default Main;
