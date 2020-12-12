import "../Styles/App.css";
import "antd/dist/antd.css";
import Layout, { Header } from "antd/lib/layout/layout";
import { Menu } from "antd";
import { HomeOutlined, RiseOutlined } from "@ant-design/icons";
import Home from "./Home";
import WeeklyLineups from "./WeeklyLineups";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  selectWeeklyLineups = (e) => {};
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="Header">
            <Menu mode="horizontal" theme="dark">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="app" icon={<RiseOutlined />}>
                <Link to="/lineups">Weekly Lineups</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lineups">
          <WeeklyLineups />
        </Route>
      </div>
    );
  }
}

export default App;
