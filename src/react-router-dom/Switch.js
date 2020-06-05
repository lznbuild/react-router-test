import React, { Component } from 'react';

import {Consumer} from './context';

import pathToReg from 'path-to-regexp';


class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Consumer>{
        state => {
          let pathname = state.location.pathname;
          let children = this.props.children;
          for( let i = 0;i<children.length;i++){
            let child = children[i];
            // redirect没有path属性
            let path = child.props.path|| '';
            let reg = pathToReg(path, [], {end:false});
            if (reg.test(pathname)) {
              // 直接返回正则匹配的Route
              return child;
            }
          }
        }
      }</Consumer>
    );
  }
}
 
export default Switch;