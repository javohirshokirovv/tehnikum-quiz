import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header/>
          <form className="welcome__form">
              <AppInput 
                inputText="Ваше имя" 
                errorText="Введите имя в правильном формате"
                inputPlaceholder="Введите ваше имя"
                inputType="text"
                />
              <AppInput 
                inputText="Ваш номер" 
                errorText="Введите номер в правильном формате например"
                inputPlaceholder="Введите ваше номер"
                inputType="tel"
                />
                <AppInput 
                inputText="Ваше e-mail" 
                errorText="Введите адрес электронной почты в правильном формате"
                inputPlaceholder="Введите ваш адрес электронной почты"
                inputType="text"
                />
                <AppInput 
                inputText="Ваш город" 
                errorText="Введите город в правильном формате"
                inputPlaceholder="Введите ваше город"
                inputType="text"
                />
              <AppButton isDisabled={false}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
