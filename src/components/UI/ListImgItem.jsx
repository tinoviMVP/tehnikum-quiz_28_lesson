import React from "react";

export const ListImgItem = ({itemId, itemText, isSelected}) => {
    return (
        <li className="variant-wrapper">
                <input required type="radio" name={itemId} id={itemId} checked={isSelected}/>
                <label htmlFor={itemId}>
                  <img src="./img/laugh.png" alt="laugh" />
                  <p>{itemText}</p>
                </label>
              </li>
    )
}