import React from "react";
import {render} from "react-dom";
import _ from 'lodash';

class Cell extends  React.Component{
    render(){
        return (
            <div className="cell" id={this.props.id}>{this.props.value}</div>
        )
    }
}

const allValues=[];
class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={value:[]};
    }
    genCell(rowID,cellId){
        let v = Math.floor((Math.random()*9)+1);
        let foundRowValue = _.includes(this.state.value,v);
        while (foundRowValue) {
            v = Math.floor((Math.random()*9)+1);
            foundRowValue = _.includes(this.state.value,v);
        }
        this.state.value.push(v);

        //store value of each row
        allValues.push(this.state.value);
        //check Array
        // if([cellId+1]==9){
        //     console.log(this.state.value);
        //     console.log(allValues);
        // }
        return <Cell id={rowID+""+[cellId+1]} value={v} key={cellId}/>
    }
    render(){
        return(
            <div className="row" id={this.props.id}>
                {
                    _.map([...Array(9)],(x,i)=>this.genCell(this.props.id,i))
                }
            </div>
        )
    }
}

class Box extends React.Component{
    render(){
        return(
            <div className="box">
                {_.map([...Array(9)],(x,i)=>
                    <Row key={i} id={i+1}/>
                )}
            </div>
        )
    }
}

render(<Box/>, document.getElementById('app'));
