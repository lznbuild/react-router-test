## react-router-dom中的部分源码实现  

```js
src/app.js  // 入口文件
src/react-router-dom // 源码实现  
```  


已装最新版react-router-dom,可在app.js中进行转换。 


```js
// react-router-dom
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
```

```js
// 使用自己实现的源码  
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "./react-router-dom";

```


### 已实现功能  
HashRouter,Switch,Route,Link,Redirect组件，通过 react context 从跟组件HashRouter传递history,match,location。实现这三个属性中的部分属性。

### 没有实现
withRouter,historyRouter,Route组件的render,children方法  

Route中的component 和render，children，children优先级最低，其次render，component优先级最高

MemoryRouter 不会在地址栏中有变化，路由及组件的对应关系全部在内存中  