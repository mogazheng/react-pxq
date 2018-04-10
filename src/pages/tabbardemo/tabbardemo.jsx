import { TabBar } from 'antd-mobile';
import React, {Component} from 'react'
import './tabbardemo.less'
import PublicHeader from "../../components/header/header"
import SevenmHome from "../7mhome/7mhome"
import SevenScore from "../7mscore/7mscore"
import SevenAdvice from "../7madvice/7madvice"

const TAB = {
  HOME: Symbol("home"),
  SCORE: Symbol("score"),
  ADVICE: Symbol("advice"),
  MORE: Symbol("more"),
  MINE: Symbol("mine")
}

export default class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: TAB.HOME,
      hidden: false
    };
  }

  renderContent(page) {

    switch (page){
      case TAB.HOME:
        return <SevenmHome/>
      case TAB.ADVICE:
        return <SevenAdvice/>
      case TAB.SCORE:
      case TAB.MORE:
      case TAB.MINE:
      default:
        return <SevenScore/>
    }
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <PublicHeader title="7M体育" color="#00385f"/>
        <TabBar
          className="my-tabbar"
          unselectedTintColor="#929ca6"
          tintColor="#00385f"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div className="home-icon"/>
            }
            selectedIcon={<div className="home-icon icon-on"/>
            }
            selected={this.state.selectedTab === TAB.HOME}
            onPress={() => {
              this.setState({
                selectedTab: TAB.HOME,
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(TAB.HOME)}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="score-icon"/>
            }
            selectedIcon={<div className="score-icon icon-on"/>
            }
            title="比分"
            key="score"
            selected={this.state.selectedTab === TAB.SCORE}
            onPress={() => {
              this.setState({
                selectedTab: TAB.SCORE,
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(TAB.SCORE)}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="advice-icon"/>
            }
            selectedIcon={<div className="advice-icon icon-on"/>
            }
            title="推介"
            key="advice"
            selected={this.state.selectedTab === TAB.ADVICE}
            onPress={() => {
              this.setState({
                selectedTab: TAB.ADVICE,
              });
            }}
          >
            {this.renderContent(TAB.ADVICE)}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="more-icon"/>}
            selectedIcon={<div className="more-icon icon-on"/>}
            title="更多"
            key="more"
            selected={this.state.selectedTab === TAB.MORE}
            onPress={() => {
              this.setState({
                selectedTab: TAB.MORE,
              });
            }}
          >
            {this.renderContent(TAB.MORE)}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="mine-icon"/>}
            selectedIcon={<div className="mine-icon icon-on"/>}
            title="我"
            key="mine"
            selected={this.state.selectedTab === TAB.MINE}
            onPress={() => {
              this.setState({
                selectedTab: TAB.MINE,
              });
            }}
          >
            {this.renderContent(TAB.MINE)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
