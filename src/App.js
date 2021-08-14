import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Login from "./Login";
import Home from "./Home";

import HeaderBlock from "./HeaderBlock";
import {
  BrowserRouter as Router,
  Switch,
  // Redirect,
  Route
} from "react-router-dom";

export default function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        {isMenuOpen && <Menu />}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <Home />
          </Route>
          <Route exact path="/iphone6">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="i Phone 6"
              bg="http://i.imgur.com/tQFT7Nn.jpg"
              price="$500"
            />
          </Route>
          <Route exact path="/iwatch">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="i Watch"
              bg="https://www.apple.com/v/watch/compare/r/images/meta/gps-lte/og__bq4s0q4hhcuq.png?202105111335"
              price="$400"
            />
          </Route>
          <Route exact path="/iphoneX">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="i Phone X"
              bg="https://www.macworld.com/wp-content/uploads/2021/03/iphone-x-cameras-100736344-orig-6.jpg?quality=50&strip=all"
              price="$1500"
            />
          </Route>
          <Route exact path="/iphoneXI">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="i Phone 11"
              bg="http://snappi-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/Iphone-11-Colors.jpg"
              price="$4500"
            />
          </Route>
          <Route exact path="/iphone7">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="i Phone 7"
              bg="https://amtelefon.com/wp-content/uploads/2017/03/iphone7-gallery2-201703.jpg"
              price="$600"
            />
          </Route>
          <Route exact path="/iphone8">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="i Phone 8"
              bg="https://i.insider.com/5d7800082e22af158373431a?width=1136&format=jpeg"
              price="$900"
            />
          </Route>

          <Route exact path="/macbookair">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="MacBook Air"
              bg="https://image.gameapps.hk/images/202003/14/1.png"
              price="$2500"
            />
          </Route>
          <Route exact path="/macbookpro">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            <HeaderBlock
              prd="MacBook Pro"
              bg="https://bestlaptopsdeal.com/wp-content/uploads/2021/01/Apple-MacBook-Pro-16-inch.jpg"
              price="$500"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
