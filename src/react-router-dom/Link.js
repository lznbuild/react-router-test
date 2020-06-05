import React,{Component} from 'react';
import {Consumer} from './context';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Consumer>{
        (state)=> {
          return <a onClick={()=> state.history.push(this.props.to)}>{this.props.children}</a>
        }
      }</Consumer>
     );
  }
}
 
export default Link;