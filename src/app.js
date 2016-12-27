import React from 'react';
import Box from './box.js';
import Buttons from './buttons.js';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gen: false,
            hide:false
        }
    }
    genSudoku(genState){
        this.setState({gen:genState});
    }
    hideSudoku(hideState){
        this.setState({hide:hideState});
    }
    render(){
        console.log(this.state.gen,this.state.hide);
        return(
            <div>
                <h1>Sudoku Generator</h1>
                <Buttons hideSudoku={this.hideSudoku.bind(this)} hideState={this.state.hide} genSudoku={this.genSudoku.bind(this)} genState={this.state.gen}/>
                {/* <HideButton hideSudoku={this.hideSudoku.bind(this)} hideState={this.state.hide}/> */}
                <Box gen={this.state.gen} hide={this.state.hide}/>
            </div>
        )

    }
}
