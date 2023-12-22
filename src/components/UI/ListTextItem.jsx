import React from "react";

export const ListTextItem = ({itemId, itemText, isSelected}) => {
    return (
      <li className="variant-wrapper">
        <input required type="radio" name={itemId} id={itemId} checked={isSelected} />
        <label htmlFor={itemId}>{itemText}</label>
      </li>
    )
}