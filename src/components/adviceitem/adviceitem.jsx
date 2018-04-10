import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Avatar from "../avatar/avatar"
import './adviceitem.less'
import '../../utils/dateFormat'

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
    },
    userType: ["普通用户", "网红投手", "7M分析师", "7M特邀专家", "好波名家"],
    type: "home"
  }

  static propTypes={
    item: PropTypes.object,
    userType: PropTypes.array,
    type: PropTypes.string
  }

  getData(){
    let {item} = this.props
    if(!item)
      return {}
    if(this.props.type === "home"){
      return {
        userPic: item.user_pic,
        userName: item.user_name,
        userType: item.user_type,
        homeTeam: item.home_name,
        guestTeam: item.away_name,
        startTime: new Date(item.time*1000).Format("yyyy-MM-dd HH:mm"),
        cost: item.look_cost
      }
    }else if(this.props.type === "advice"){
      return {
        userPic: item.face,
        userName: item.nickname,
        userType: item.usertype,
        homeTeam: item.homename,
        guestTeam: item.awayname,
        startTime: item.starttime.substring(0, item.starttime.length - 3),
        cost: item.cost,
        recent: this.betResult(item.betresult, item.betjoincount)
      }
    }
  }

  betResult(data, count){
    let _dataArr = data.split(','),//分割字符串
      _num = 0,
      _str = '',
      _result = '';

    if(count != '' && count != null && count > 1) {//战绩不为空或2连胜以上
      for (var i = 0; i < count; i++) {
        if (_dataArr[i] == 1) {//查询胜场
          _num++;
        }
      }

      if(_num == count){//连胜
        _result = `${_num}连胜`;
      }else{//几中几
        _result = `${count}中${_num}`;
      }

      if(_num / count >= 0.666){
        return _result;
      }
    }
  }

  render(){
    let {userType, type} = this.props
    let item = this.getData()
    return (
      <div className="advice-item">
        <div className="advice-user">
          <Avatar className="advice-user-pic" url={item.userPic} style={{display: 'inline-block'}} isVip/>
          <div className="advice-user-name">
          <p>{item.userName}</p>
          <i className="advice-user-type">{userType[item.userType]}</i>
            {type === 'advice' && item.recent && <p className="advice-user-recent">近期战绩：<span>{item.recent}</span></p>}
          </div>
        </div>
      <div className="advice-desc">
        <div className="advice-match">
          <p>{`${item.homeTeam} VS ${item.guestTeam}`}</p>
          <p style={{marginTop: '5px'}}><span className="advice-match-time">{`开赛时间：${item.startTime}`}</span></p>
        </div>
        <div className="advive-cost">
          {item.cost === 0 ? "免费查看" : `${item.cost}M钻查看`}
        </div>
      </div>
      </div>
    )
  }
}
