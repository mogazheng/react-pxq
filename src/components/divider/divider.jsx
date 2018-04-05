import React, {Component} from 'react'
import './divider.less'
import PropTypes from 'prop-types'

export default class Divider extends Component{

  static defaultProps={
    isFull: false
  }

  static propTypes={
    isFull: PropTypes.bool
  }

  render(){
    return(
      <hr className={`divider-line ${this.props.isFull && "divider-line-full"}`}/>
    )
  }
}