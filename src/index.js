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

const table=[[],[],[],[],[],[],[],[],[]];
const rowValue = [1,2,3,4,5,6,7,8,9];

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rowValues:[]
        };
    }
    genNo(rowId,i){
        let v;
        let check = rowId/3;

        //check and create basic sequences start with 123 && 234 && 456
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

        //shift indexes of  each sequence 3 cells
        let check2 = rowId%3;
        switch (true) {
            case (check2==2):
                v<3 ? v+=6 : v-=3;
                break;
            case (check2==0):
                v<6 ? v+=3 : v-=6;
                break;
        }
        // console.log(v);
        table[rowId-1].push(rowValue[v]);
        return table[rowId-1][i];
    }
    scramble(){
        let ay,by,cy;
        ay= Math.floor((Math.random()*9)+1);
        switch (true) {
            case (ay==1||ay==2||ay==3):
                by=Math.floor((Math.random()*3)+1);
                while(by==ay){
                    by=Math.floor((Math.random()*3)+1);
                }
                cy=6-ay-by;
                break;
            case (ay==4||ay==5||ay==6):
                by=Math.floor((Math.random()*3)+4);
                while(by==ay){
                    by=Math.floor((Math.random()*3)+4);
                }
                cy=15-ay-by;
                break;
            default:
                by=Math.floor((Math.random()*3)+7);
                while(by==ay){
                    by=Math.floor((Math.random()*3)+7);
                }
                cy=24-ay-by;

        }
        console.log(ay,by,cy);
    }
    genCell(rowId){
        this.scramble();
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
console.log(table);
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
