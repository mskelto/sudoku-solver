import React, { Component } from 'react';
import Box from './Box/box';
import './SudokuTable.css';

function generateColumnCssClass(row, col) {
var classString = ""
if (row === 0) {
    classString += "topBorder ";
}
if (row === 8 || row === 2 || row === 5) {
    classString += "bottomBorder ";
}
if (col === 0) 
{
    classString += "leftBorder ";
}
if (col ===2 || col === 5 || col === 8) {
    classString += "rightBorder ";
}
return classString
}

export default class SudokuTable extends Component {
    render() {
        return <table className="SudokuTable">
                 <tbody>
        {
        [0,1,2,3,4,5,6,7,8].map((object, i) => {
            return <tr id={i} key={i}>{
                [0,1,2,3,4,5,6,7,8].map((object, j) => {
                    let rowId = "" + i + j;
                    return <td key={rowId} className={generateColumnCssClass(i,j)}>
                        <Box id={rowId}/>
                    </td>
                })
            }</tr>;
        })}
            </tbody>
        

        </table>
    }

}


 