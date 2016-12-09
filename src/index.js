//testing test1
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

const rowValue = [];
class Row extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         rowValues:[]
    //     };
    // }
    genNo(rowId,i){
        let v;
        let check = rowId/3;
        switch(true){
            case (check <= 1):
                v = i;
                break;
            case (check <= 2):
                if(i+1>=rowValue.length){
                    v= i+1-rowValue.length;
                }
                else{
                    v=i+1;
                }
                break;
            case (check <= 3):
                if(i+2>=rowValue.length){
                    v=i+2-rowValue.length;
                }
                else{
                    v=i+2;
                }
                break;
        }

        let check2 = rowId%3;
        switch (true) {
            case (check2==2):
                v<3 ? v+=6 : v-=3;
                break;
            case (check2==0):
                v<6 ? v+=3 : v-=6;
                break;
        }
        return rowValue[v];
    }
    genCell(rowId){
        this.genNo(rowId);
        return(
            _.map([...Array(9)],(x,i)=>
                <Cell id={rowId+""+[i+1]} value={this.genNo(rowId,i)} key={i}/>
            )
        )
    }
    render(){
        return(
            <div className="row" id={this.props.id}>
                {
                    this.genCell(this.props.id)
                }
            </div>
        )
    }
}
class Box extends React.Component{
    genNo(){
        _.times(9,function(){
            let val = Math.floor((Math.random()*9)+1);
            let checkValue = _.includes(rowValue,val);
            while(checkValue){
                val = Math.floor((Math.random()*9)+1);
                checkValue = _.includes(rowValue,val);
            }
            rowValue.push(val);
        })
    }
    render(){
        this.genNo();
        return(
            <div className="box">
                {_.map([...Array(9)],(x,i)=>
                    <Row key={i} id={i+1}/>
                )}
            </div>
        )
    }
}
console.log(rowValue);
render(<Box/>, document.getElementById('app'));
