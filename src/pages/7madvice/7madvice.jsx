import React, {Component} from 'react'
import API from "../../api/api"
import ReactDOM from "react-dom"
import {PullToRefresh} from "antd-mobile"
import AdviceItem from "../../components/adviceitem/adviceitem"
import Divider from "../../components/divider/divider"

export default class SevenAdvice extends Component{

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
    API.get7mAdvice().then((result) => {
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

  render(){
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
        {
          data.fixture && data.fixture.map((advice) =>{
            return [
              <AdviceItem key={advice.id} item={advice} type="advice"/>,
              <Divider key={0}/>
            ]
          })
        }
      </PullToRefresh>
    )
  }
}
