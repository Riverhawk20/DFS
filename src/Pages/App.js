import "../Styles/App.css";
import "antd/dist/antd.css";
import Layout, { Header } from "antd/lib/layout/layout";
import { Menu } from "antd";
import { HomeOutlined, MonitorOutlined, RiseOutlined } from "@ant-design/icons";
import Home from "./Home";
import WeeklyLineups from "./WeeklyLineups";
import ValueReport from "./ValueReport";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  async componentDidMount() {
    /*
    var urls = [
      "https://hawkdfsprojections.s3.us-east-2.amazonaws.com/projection_dkall.csv",
      "https://hawkdfsprojections.s3.us-east-2.amazonaws.com/projection_dkdef.csv",
      "https://hawkdfsprojections.s3.us-east-2.amazonaws.com/projection_fdall.csv",
      "https://hawkdfsprojections.s3.us-east-2.amazonaws.com/projection_fddef.csv",
    ];
    var csv = [];
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    urls.forEach((url) => {
      var config = {
        method: "get",
        url: proxyurl + url,
      };
      axios(config)
        .then(function (response) {
          csv[csv.length] = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    */
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
              <Menu.Item key="lineups" icon={<RiseOutlined />}>
                <Link to="/lineups">Weekly Lineups</Link>
              </Menu.Item>
              <Menu.Item key="value-report" icon={<MonitorOutlined />}>
                <Link to="/value">Value Report</Link>
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
        <Route path="/value">
          <ValueReport />
        </Route>
      </div>
    );
  }
}

export default App;
