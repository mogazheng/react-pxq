import React, {Component} from 'react'
import './homesection.less'
import PropTypes from 'prop-types'

export default class HomeSection extends Component{

  static propTypes={
    title: PropTypes.string.isRequired,
    moreText: PropTypes.string,
    onPress: PropTypes.func
  }


  render(){
    return (
      <div className="home-section">
        <p className="home-section-text">{this.props.title}</p>
        {this.props.moreText && <p className="home-section-more">{`${this.props.moreText} >`}</p>}
      </div>
    )
  }
}
