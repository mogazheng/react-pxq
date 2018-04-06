import React, {Component} from 'react'
import HomeSection from "./homesection/homesection"
import Divider from "../../components/divider/divider"
import AdviceItem from "../../components/adviceitem/adviceitem"
import './7mhome.less'
import ExpertAvatar from "../../components/expertavatar/exertavatar"
import API from "../../api/api"
import axios from 'axios';

export default class SevenmHome extends Component{

  componentWillMount() {
    // API.get7mHome().then((result) => console.log(result)).catch((err) => console.log(err))
    // axios.get("http://interface.mobi.7m.com.cn/guess/websquare.php?20180316&uid=0&token=0&plat=3&lan=1&expert_no_shield=1&bettype=1&time=1523004160062").then((res) =>alert(res))
  }

  render(){
    return (
      <div className="tab-content">
        <div className="home-block">
          <Divider isFull/>
          <HomeSection title="专家推介" moreText="全部推介"/>
          <Divider/>
          <AdviceItem />
          <Divider/>
          <AdviceItem />
          <Divider/>
          <AdviceItem />
          <Divider/>
          <p style={{color: '#ff8600', fontSize: '16px', height: '60px', lineHeight: '60px', textAlign: 'center'}}>临场劲推，竞猜高手方案推介</p>
          <Divider isFull/>
        </div>
        <div className="home-block">
          <Divider isFull/>
          <HomeSection title="7M分析师"/>
          <Divider/>
          <div className="expert-block">
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
            <ExpertAvatar className="expert"/>
          </div>
          <Divider isFull/>
        </div>
      </div>
    );
  }
}
