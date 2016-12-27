import React from "react";

export default class Cell extends  React.Component{
    render(){
        // let random = Math.random()<this.props.level;
        // if(random){
            return (
                <div className="cell" id={this.props.id}>{this.props.value}</div>
            )
        // }
        // else{
        //     return (
        //         <div className="cell" id={this.props.id}></div>
        //     )
        // }
    }
}
