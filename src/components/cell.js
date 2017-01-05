import React from "react";

export default class Cell extends  React.Component{
    genValue(){
        let value = this.props.value;
        if(this.props.hide){
            // let hideChance = Math.random()<0.5;
            return <input autoComplete="off" maxLength="1" />
        }
        else{
            return value;
        }
    }
    render(){
        return(
            <div className="cell" id={this.props.id}>{this.genValue()}</div>
        )
    }
}
