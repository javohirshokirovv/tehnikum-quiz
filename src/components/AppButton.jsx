import React from "react";

export const AppButton = ({buttonText="Отправить",isDisabled})=>{
    return(
      <button disabled={isDisabled} type="submit" id="next-btn">
        {buttonText}
      </button>
    );
};