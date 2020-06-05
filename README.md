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