import React, {useState} from 'react'
import axios from 'axios'

function StandardSudoku() {

    var [validity, setValidity] = useState(true);

    // First num is row
    var [A11, setA11] = useState("");
    var [A12, setA12] = useState("");
    var [A13, setA13] = useState("");
    var [A21, setA21] = useState("");
    var [A22, setA22] = useState("");
    var [A23, setA23] = useState("");
    var [A31, setA31] = useState("");
    var [A32, setA32] = useState("");
    var [A33, setA33] = useState("");

    function checkValidity() {

        var row1 = [];
        row1.append(A11);
        row1.append(A12);
        row1.append(A13);
        var row2 = [];
        row2.append(A21);
        row2.append(A22);
        row2.append(A23);
        var row3 = [];
        row3.append(A31);
        row3.append(A32);
        row3.append(A33);

        var A = [];
        A.append(row1);
        A.append(row2);
        A.append(row3);


        for (var i = 1; i <= 3; ++i) {
            for (var j = 1; j <= 3; ++j) {
                var cell = A[j][i];
                for (var k = 1; i <= 3; ++k) {
                    if (k === i) {
                        break;
                    }
                    for (var p = 1; p <= 3; ++p) {
                        if (p === j) {
                            break;
                        }

                        var otherCell = A[k][p];
                        if (cell === otherCell) {
                            setValidity(false);
                            return;
                        }

                    }
                }
                
            }
        }

        setValidity(true);

    }


    return (
        <div>
            <h>Enter a valid sudoku board and we will solve:</h>
            <p> </p>

            <input type="text" value={A11} onChange={(e) => {
                setA11(e.target.value);}}/>
            <input type="text" value={A12} onChange={(e) => {
                setA12(e.target.value);}}/>
            <input type="text" value={A13} onChange={(e) => {
                setA13(e.target.value);}}/>
            <p> </p>
            <input type="text" value={A21} onChange={(e) => {
                setA21(e.target.value);}}/>
            <input type="text" value={A22} onChange={(e) => {
                setA22(e.target.value);}}/>
            <input type="text" value={A23} onChange={(e) => {
                setA23(e.target.value);}}/> 
            <p> </p>
            <input type="text" value={A31} onChange={(e) => {
                setA31(e.target.value);}}/>
            <input type="text" value={A32} onChange={(e) => {
                setA32(e.target.value);}}/>
            <input type="text" value={A33} onChange={(e) => {
                setA33(e.target.value);}}/>
            <p> </p>
            
            <button type="submit" onClick={() => {
                checkValidity();
            }}>Submit Board</button>

            <p>{}</p>

        </div>
    )
}

export default StandardSudoku;