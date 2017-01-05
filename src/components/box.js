import React from 'react';
import _ from 'lodash';
import Row from './row.js';

let rowValue = [];
export default class Box extends React.Component{
    render(){
        return(
            <div className="box">
                {_.map([...Array(9)],(x,i)=>
                    <Row key={i} id={i+1} rowValue={this.props.rowValue} hide={this.props.hide}/>
                )}
            </div>
        )
        console.log(rowValue);
    }

}
