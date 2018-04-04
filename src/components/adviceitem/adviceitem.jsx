import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Avatar from "../avatar/avatar"
import './adviceitem.less'
import {Button} from 'antd-mobile'

const UserType = ['用户','网红投手','7M分析师']

export default class AdviceItem extends Component{

  static defaultProps={
    item: {
      id: 3029895,
      pid: "18040318003029895",
      userid: 404947,
      usertype: 2,
      nickname: "秦王赢正",
      face: "http://interface.mobi.7m.com.cn/user/userhead/4049/404947_1512663752.png",
      summary: "对中日联赛了解深入，擅长欧洲联赛剖析解读",
      betresult: "0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1",
      betjoincount: "10",
      gameid: 2938177,
      gamestate: 17,
      starttime: "2018-04-03 18:00:00",
      competitionid: 139,
      competitionname: "亚洲联赛冠军杯",
      homeid: 436,
      homename: "大阪樱花",
      awayid: 4408,
      awayname: "济州联",
      cost: 38,
      ispay: 0
    }
  }

  static propTypes={
    item: PropTypes.object
  }

  render(){
    let {item} = this.props
    return (
      <div className="advice-item">
        <div className="advice-user">
          <Avatar className="advice-user-pic" url={item.face} style={{display: 'inline-block'}} isVip/>
          <p>{item.nickname}</p>
          <i className="advice-user-type">{UserType[item.usertype]}</i>
        </div>
      <div className="advice-desc">
        <div className="advice-match">
          <p>{`${item.homename} VS ${item.awayname}`}</p>
          <p style={{marginTop: '5px'}}><span className="advice-match-time">{`开赛时间：${item.starttime.substring(0, item.starttime.length - 3)}`}</span></p>
        </div>
        <div className="advive-cost">
          {`${item.cost}M钻查看`}
        </div>
      </div>
      </div>
    )
  }
}
