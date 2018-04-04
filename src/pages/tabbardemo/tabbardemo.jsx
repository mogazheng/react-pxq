import { TabBar } from 'antd-mobile';
import React, {Component} from 'react'
import './tabbardemo.less'
import PublicHeader from "../../components/header/header"
import Avatar from "../../components/avatar/avatar"
import AdviceItem from "../../components/adviceitem/adviceitem"

export default class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div className="content-scroll">
        <AdviceItem />
      </div>
    );
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
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('home')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="score-icon"/>
            }
            selectedIcon={<div className="score-icon icon-on"/>
            }
            title="比分"
            key="score"
            selected={this.state.selectedTab === 'score'}
            onPress={() => {
              this.setState({
                selectedTab: 'score',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('score')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="advice-icon"/>
            }
            selectedIcon={<div className="advice-icon icon-on"/>
            }
            title="推介"
            key="advice"
            selected={this.state.selectedTab === 'advice'}
            onPress={() => {
              this.setState({
                selectedTab: 'advice',
              });
            }}
          >
            {this.renderContent('advice')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="more-icon"/>}
            selectedIcon={<div className="more-icon icon-on"/>}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            {this.renderContent('more')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="mine-icon"/>}
            selectedIcon={<div className="mine-icon icon-on"/>}
            title="我"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            {this.renderContent('mine')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
