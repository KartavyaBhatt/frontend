import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setCurrentColor } from "./colorSlice";
import axios from 'axios';

const CellGrid = (props) => {
    const height = 8;
    const width = 8;

    useEffect(async ()=> {
        const requestBody = {
            height: 8,
            width: 8
        }
         await axios.post("https://localhost:8000/api/new", JSON.stringify(requestBody)).then((res)=> {
            console.log(res);
        })
    }, []);  

    const setColorServer = (i,j,color) => {

    }
    
    return (
        <div>
            {Array.from({ length: height }, (_, i) => (
                <div className="board-row">{
                    Array.from({ length: width }, (_, j) => (
                        <button id={`${i}${j}`} color={'gray'} onClick={() => {
                            setColorServer(i, j, props.color);
                        }}></button>
                    ))
                }</div>
            ))}
        </div>
    )

}

export default CellGrid;