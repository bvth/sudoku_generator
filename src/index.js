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

const table=[[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]];
// const rowValue = [1,2,3,4,5,6,7,8,9];
const rowCheck=[];
class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rowValues:[]
        };
    }
    genNo(arrayRowId){
        let a,b,c;
        if(arrayRowId==0){
            a = Math.floor(Math.random()*9+1);
        }
        else if(arrayRowId==3 || arrayRowId ==6){
            table[arrayRowId-3][0][0]+3>9? a=table[arrayRowId-3][0][0]-6:a = table[arrayRowId-3][0][0]+3;
        }
        else{
            let choose;
            if(rowCheck.length!=0){
                if(rowCheck[rowCheck.length-1]==-2){
                    choose=4;
                }
                else
                {
                    choose=-2;
                }
            }
            else{
                 choose = Math.random()<0.5 ? -2 : 4;
            }
             rowCheck.push(choose);
            if(table[arrayRowId-1][0][0]+choose < 1){
                a=table[arrayRowId-1][0][0]+7;
            }
            else if(table[arrayRowId-1][0][0]+choose > 9){
                a=table[arrayRowId-1][0][0]-5;
            }
            else{
                a=table[arrayRowId-1][0][0]+choose;
            }
        }
        for(var i = 0;i<3;i++){
            a+6>9 ? b=a-3 : b=a+6;
            b-3<1 ? c=b+6 : c=b-3;
            table[arrayRowId][i].push(a);
            table[arrayRowId][i].push(b);
            table[arrayRowId][i].push(c);
            ++a>9 ? a-=9 : a;
        }

    }
    scramble(rowId){

    }
    genCell(rowId){
        this.genNo(rowId-1);
        return(
            _.map([...Array(3)],(x,i)=>
                _.map([...Array(3)],(x,j)=>
                    <Cell id={rowId+""+[i+1]} value={table[rowId-1][i][j]} key={i+""+j}/>
                )
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
console.log(rowCheck);
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
