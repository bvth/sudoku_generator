import React from 'react';
import _ from 'lodash';
import Cell from './cell.js';

export default class Row extends React.Component{
    genNo(rowId,i){
        let rowValue = this.props.rowValue;
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
