import React, { Component } from 'react';
import {Provider} from './context';


class HashRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 路由组件props中会有location,history,match属性，携带路由信息，由根组件通过React context统一派发到Route组件
      location: {
        pathname: window.location.hash.slice(1) || "/"
      },
      history: {
        push(to) {
          window.location.hash = to;
        }
      }
    };
  }
  
  componentDidMount() {
    // hash的初始化  
    window.location.hash = window.location.hash || '/' 

    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }

  render() { 
    const {location, history} = this.state;
    const providerValue = {
      location,
      history
    };

    return ( 
      <Provider value={providerValue}>
        {this.props.children}
      </Provider>
     );
  }
}
 
export default HashRouter;