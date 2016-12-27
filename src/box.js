import React from 'react';
import _ from 'lodash';
import Row from './row.js';

let rowValue = [];
export default class Box extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     rowValue
        // }
    }

    genNo(gen){
        if(gen){
            rowValue = [];
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
        // console.log(gen, this.props.gen);
        gen=false;
        // console.log(gen, this.props.gen);
    }
    render(){

        this.genNo(this.props.gen);
        return(
            <div className="box">
                {_.map([...Array(9)],(x,i)=>
                    <Row key={i} id={i+1} rowValue={rowValue}/>
                )}
            </div>
        )
        console.log(rowValue);
    }

}
