import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './refreshloading.less'

export default class RefreshLoading extends Component{

  static defaultProps = {
    text: '正在加载...'
  }

  static propTypes = {
    text: PropTypes.string
  }

  render(){
    return(
      <div className="refresh-loading">
          <div className="refresh-loading-ball">
            <div className="load-ball"/>
            <div className="load-shadow"/>
          </div>
        <span className="load-text">{this.props.text}</span>
      </div>
    )
  }
}
