import React, {Component} from 'react'
import './expertavatar.less'
import PropTypes from 'prop-types'

export default class ExpertAvatar extends Component {
  static defaultProps = {
    expert: {
      draw_num: 0,
      is_v: true,
      lose_num: 0,
      user_id: "425367",
      user_name: "优雅射手",
      user_pic: "http://interface.mobi.7m.com.cn/user/userhead/4253/425367_1517206744.png",
      user_type: 2,
      win_num: 4
    },
    userType: ["普通用户", "网红投手", "7M分析师", "7M特邀专家", "好波名家"]

  }

  static propTypes = {
    expert: PropTypes.object.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    userType: PropTypes.array
  }

  render() {
    let {expert, userType} = this.props
    return (
      <div className={"exert-avatar " + this.props.className} style={this.props.style}>
        <div className="exert-avatar-block">
          <img src={expert.user_pic}/>
          {expert.is_v && <i className="expert-vip-icon"/>}
          <p className="exert-avatar-recent">{`${expert.win_num}赢${expert.lose_num}负`}</p>
        </div>
        <p className="expert-avatar-name">{expert.user_name}</p>
        <i className="expert-avatar-user-type">{userType[expert.user_type]}</i>
      </div>
    )
  }
}
