import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import './scss/app.scss';
import './scss/index.css';
/*
* Flexible drawer menu using jQuery, iScroll and CSS.
* http://git.blivesta.com/drawer/
*https://codepen.io/golfer19881/pen/mAQLmB
*/
import 'iscroll';
import $ from 'jquery';
import 'jquery-drawer';

import {jqry} from './utils/jq.js';

import NavigationMenu from './components/navigation_menu';


class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        file: ''
      }
    }

  render(){
    $(document).ready(function() {

        $('.drawer').drawer();
        $('.drawer').drawer('close');

        $('.drawer').on('drawer.opened', function(){

          console.log("drawer.opened");
        });

        $('.drawer').on('drawer.closed', function(){
          console.log("drawer.closed");
        });
    });
      return(
          <div className="app_container">
            <div className="header">
              <h1>App</h1>
            </div>
             
              <NavigationMenu/>
          </div>
      )
  }
}


//export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
