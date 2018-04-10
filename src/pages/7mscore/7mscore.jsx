import React, {Component} from 'react'
import ExpertAvatar from "../../components/expertavatar/exertavatar"
import RefreshLoading from "../../components/refreshloading/refreshloading"

export default class SevenScore extends Component{
  render(){
    return(
      <div className="tab-content">
        <RefreshLoading/>
      </div>
    )
  }
}
