import React, { Component } from 'react';
import './SudokuTable.css';

export default class SudokuTable extends Component {
    render() {
        return <table className="SudokuTable">
    
        <tbody>
        {
        [0,2,3,4,5,6,7,8].map((object, i) => {
            return <tr obj={object} key={i}>{
                [0,1,2,3,4,5,6,7,8].map((object, j) => {
                    let id = "" + i + j
                    return <td key={id}>
                        <input className="SudokuInput" id={id}></input>
                    </td>
                })
            }</tr>;
        })}
            </tbody>
    
        </table>
    }
    
}