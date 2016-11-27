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

const colValues=[[],[],[],[],[],[],[],[],[]];
class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rowValues:[]
        };
    }
    genCell(rowID,cellId){
        let v = Math.floor((Math.random()*9)+1);
        let foundRowValue = _.includes(this.state.rowValues,v);
        let foundColValue = _.includes(colValues[cellId],v);
        //this is where it stuck
        while (foundRowValue||foundColValue) {
            v = Math.floor((Math.random()*9)+1);
            foundRowValue = _.includes(this.state.rowValues,v);
            foundColValue = _.includes(colValues[cellId],v);
        }
        //end of loop
        //store value of each row
        this.state.rowValues.push(v);
        //store value of each column
        colValues[cellId].push(v)

        if([cellId+1]==9){
        //    allValues.push(this.state.rowValue);
        }
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
console.log(colValues);

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
