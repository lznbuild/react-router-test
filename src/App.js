import React, { Fragment } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "./react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
          <li>
            <Link to="/page3">page3</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/page1/123" component={Page1} />
          <Route path="/page1" exact={true} component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Redirect to="/page1" />
        </Switch>
      </div>
    </Router>
  );
}

function Page1() {
  return <h2>page1</h2>;
}

function Page2() {
  return <h2>page2</h2>;
}

function SubPage1(props) {
  console.log(props, "props");
  return <h4>subpage1</h4>;
}
function SubPage2() {
  return <h4>subpage2</h4>;
}
function SubPage3(props) {
  console.log(props);
  return <h4>subpage3</h4>;
}

function Page3(props) {
  return (
    <Fragment>
      <h2>page3</h2>
      <div>
        <ul>
          <li>
            <Link to="/page3/subpage1">sub1</Link>
          </li>
          <li>
            <Link to="/page3/subpage2">sub2</Link>
          </li>
          <li>
            <Link to="/page3/dong/45">sub----45</Link>
          </li>
          <li>
            <Link to="/page3/dong/78">sub----78</Link>
          </li>
        </ul>
      </div>
      <div>
        <Route path="/page3/subpage1" component={SubPage1} />
        <Route path="/page3/subpage2" component={SubPage2} />
        <Route path="/page3/dong/:id" component={SubPage3} />
      </div>
    </Fragment>
  );
}
