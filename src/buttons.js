import React from 'react';

export default class Buttons extends React.Component{
    handleGen(event){
        event.preventDefault();
        this.props.genSudoku(true);
    }
    handleHide(event){
        event.preventDefault();
        this.props.hideSudoku(true);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleGen.bind(this)}>Generate</button>
                <button onClick={this.handleHide.bind(this)}>Hide</button>
            </div>
        )
    }
}
