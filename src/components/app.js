import React from 'react';
import Box from './box.js';
import Buttons from './buttons.js';

let rowValue=[];
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gen: false,
            hide:true,
            genSolution: false
        }
    }
    genSudoku(genState){
        this.setState({gen:genState});
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
    genSolution(){
        this.setState({genSolution:true})
    }
    hideSudoku(hideState){
        this.setState({hide:hideState});
    }
    render(){
        // console.log(this.state.gen,this.state.hide);
        return(
            <div>
                <h1>Sudoku Generator</h1>
                <Buttons hideSudoku={this.hideSudoku.bind(this)}
                    hideState={this.state.hide}
                    genSudoku={this.genSudoku.bind(this)}
                    genState={this.state.gen}/>
                <Box gen={this.state.gen} hide={this.state.hide} rowValue={rowValue}/>
                <hr/>
                <h1>Solution</h1>
                <Box gen={this.state.gen} hide={false} rowValue={rowValue}/>
            </div>
        )

    }
}
