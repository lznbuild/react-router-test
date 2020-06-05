import React, { PureComponent } from 'react';
import {Consumer} from './context';

import pathToReg from 'path-to-regexp';


class Route extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <Consumer>
          {
            (state) => {
              // exact默认为false 
              const {path,component:Component,exact=false} = this.props;
              const {pathname} = state.location;
            
              let keys = [];
              // 根据path实现一个正则，匹配
              let reg = pathToReg(path, keys, {end:exact});
              // keys = keys.map(item=>item.name)
              let result = pathname.match(reg);
 
              const props = {
                location: state.location,
                history: state.history,
                match: {}
              };

              if (keys.length && keys[0].name) {
                props.match[keys[0].name] = result && result.length && result[1]
              }

              if(result) {
                return <Component {...props}/>
              }

              return null
            }
          }
        </Consumer>
     );
  }
}
 
export default Route;