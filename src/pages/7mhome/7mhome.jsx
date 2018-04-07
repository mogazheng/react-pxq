import React, {Component} from 'react'
import HomeSection from "./homesection/homesection"
import Divider from "../../components/divider/divider"
import AdviceItem from "../../components/adviceitem/adviceitem"
import './7mhome.less'
import ExpertAvatar from "../../components/expertavatar/exertavatar"
import API from "../../api/api"
import {PullToRefresh} from 'antd-mobile'
import ReactDOM from 'react-dom'

export default class SevenmHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      height: document.documentElement.clientHeight,
      data: []
    }
  }

  _getData(){
    this.setState({
      refreshing: true
    })
    API.get7mHome().then((result) => {
      console.log(result)
      this.setState({
        refreshing: false,
        data: result
      })
    }).catch((err) => {
      console.log(err)
      this.setState({
        refreshing: false
      })
    })
  }

  componentWillMount() {
    this._getData()
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
  }

  render() {
    let {data} = this.state
    return (
      <PullToRefresh
        ref={el => this.ptr = el}
        style={{
          height: this.state.height
        }}
        className="tab-content"
        direction="down"
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this._getData()
        }}
      >
        <div>
          <div className="home-block">
            <Divider isFull/>
            <HomeSection title="专家推介" moreText="全部推介"/>
            <Divider/>
            {
              data.expert_recommendation && data.expert_recommendation.map((advice, index) =>{
                console.log(advice)
                return [
                  <AdviceItem key={advice.id} item={advice}/>,
                  index === data.expert_recommendation.length - 1 && (<Divider key={0}/>)
              ]
              })
            }
            <Divider/>
            <AdviceItem/>
            <Divider/>
            <AdviceItem/>
            <Divider/>
            <AdviceItem/>
            <Divider/>
            <p style={{
              color: '#ff8600',
              fontSize: '16px',
              height: '60px',
              lineHeight: '60px',
              textAlign: 'center'
            }}>临场劲推，竞猜高手方案推介</p>
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
      </PullToRefresh>
    )
  }
}
