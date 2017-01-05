import React from 'react';

export default class Buttons extends React.Component{
    handleGen(event){
        event.preventDefault();
        this.props.genSudoku(true);
    }
    handleHide(event){
        event.preventDefault();
        this.props.hideState==false ? this.props.hideSudoku(true) : this.props.hideSudoku(false);
    }
    render(){
        return (
            <div className="buttons">
                <button onClick={this.handleGen.bind(this)}>Generate</button>
                <button onClick={this.handleHide.bind(this)}>Hide</button>
            </div>
        )
    }
}
