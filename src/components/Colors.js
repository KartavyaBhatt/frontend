import React from "react";

const ColorGrid = (props) => {
    const colors = ['red', 'green', 'blue', 'gray'];

    return (
        <div>
            {colors.map((color) => {
                return <button color={color} onClick={() =>{
                    props.setColor(color)
                    console.log('Clicked on color: ', color);
                }
                } id={color}/>
            })}
        </div>
    )

}

export default ColorGrid;