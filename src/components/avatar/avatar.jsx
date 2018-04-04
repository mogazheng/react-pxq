import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './avatar.less'

export default class Avatar extends Component{

  static propTypes={
    isVip: PropTypes.bool,
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    style: PropTypes.object
  }

  render(){
    return(
      <div className={"avatar "+this.props.className} style={this.props.style}>
        <img src={this.props.url}/>
        {this.props.isVip && <i/>}
      </div>
    )
  }
}
