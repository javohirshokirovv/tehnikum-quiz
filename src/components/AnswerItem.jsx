import React from "react";

export const AnswerItem = ({id}) =>{
    return(
        <li classname="variant-wrapper">
            <input required type="radio" name={id} id={id} />
            <label htmlFor={id}>Ваш ответ</label>
        </li>
    );
};